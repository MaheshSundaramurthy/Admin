import { Injector } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { Link } from '../models/link';
import { DefaultModal } from './modals/default-modal/default-modal.component';
import { DsBaseEntityApiService } from '../../shared/services/base-entity-api.service';
import { MicroserviceConfig } from '../../shared/providers/microservice.provider';
import { DsEntityCrudComponent } from '../../shared/components/base-entity-crud-component';

import 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';

export abstract class DsBaseEntityShowComponent extends DsEntityCrudComponent {

    protected headerTitle: string = 'general.details';

    // /**
    //  * Determines the default visibilty of action buttons
    //  * @type { [s: string]: boolean }
    //  */
    // actions: { [s: string]: boolean } = {
    //     edit: true,
    //     delete: true,
    // };

    /**
     * Descriptor of entity action buttons in the page.
     * @type  Array<object>
     */
    actions: Array<any> = [
        {
            name: 'edit',
            title: 'ds.microservices.entity.action.edit',
            class: 'btn btn-primary btn-with-icon',
            iconClass: 'ion-edit',
            visible: true,
            routerLink: ['../edit'],
            region: 'header',
        },
        {
            name: 'delete',
            title: 'ds.microservices.entity.action.delete',
            class: 'btn btn-danger btn-with-icon',
            iconClass: 'ion-android-delete',
            visible: true,
            region: 'footer',
        },
    ];

    /**
     * A shortcut to the entity's metadata from the MicroserviceConfig.
     */
    protected entityMetadata = {};

    /**
     * Language change observer
     */
    protected languageChangeSubscriber: Subscriber<LangChangeEvent>;

    /**
     * Alias for the current interface language. Ex: `en`, `fr`, ec...
     */
    protected lang: string;

    /**
     * The Enity API service is not injected into this base component class because
     * the API service configurations are Microservice-specific.
     */
    protected entityApiService: DsBaseEntityApiService<any>;

    /* Other injectable dependencies */
    protected route: ActivatedRoute;
    protected router: Router;
    protected translate: TranslateService;
    protected toastr: ToastsManager;
    protected modal: NgbModal;

    protected entitySubscribed: boolean = false;
    protected initialLang: string;
    protected routeParams: Params;

    constructor(injector: Injector, protected microserviceConfig: MicroserviceConfig) {
        super(injector);
        this.router = this.injector.get(Router);
        this.route = this.injector.get(ActivatedRoute);
        this.translate = this.injector.get(TranslateService);
        this.modal = this.injector.get(NgbModal);
        this.toastr = this.injector.get(ToastsManager);

        this.initialLang = this.translate.currentLang;
    }

    ngOnInit() {
        super.ngOnInit();

        this.entityMetadata = this.microserviceConfig.settings.entities[this.entityUrlPrefix].properties;
        this.lang = this.translate.currentLang;

        // Subscribe to language-change events
        this.languageChangeSubscriber = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {

            if (this.initialLang === event.lang) {
                this.initialLang = null;
                return;
            }

            this.lang = event.lang;
            this.initialLang = event.lang;
            this.prepareEntity().subscribe();
        });

        this.prepareEntity().subscribe();
        this.entitySubscribed = true;
    }

    ngOnDestroy() {
        // Unsubscribe from language-change events
        if (this.languageChangeSubscriber) {
            this.languageChangeSubscriber.unsubscribe();
        }
    }

    protected prepareEntity(): Observable<{'entity': any, 'entityParent'?: any}> {
        return this.route.params.flatMap((params: Params) => {
            this.onRouteParams(params);

            if (this.entity) {
                return Observable.of({'entity': this.entity, 'entityParent': this.entityParent});
            }
            else {
                let uuid = params['id'];
                let parentUuid = params[this.entityParentUrlParam];

                return this.entityApiService.getOne(this.entityUrlPrefix, uuid).flatMap(entity => {
                    this.entity = entity;
                    this.onEntityPrepared();

                    return this.prepareEntityParent(this.entityParentUrlPrefix, parentUuid).flatMap(entityParent => {
                        return Observable.of({'entity': entity, 'entityParent': entityParent});
                    });
                }).catch(error => {
                    if (error instanceof Response) {
                        this.onPrepareEntityError(error);
                    } else {
                        console.warn('Unexpected error occurred while fetching entity: ' + error);
                    }
                    throw error;
                });
            }
        });
    }

    protected prepareEntityParent(urlPrefix: string, urlParam: string): Observable<any> {
        if (urlPrefix && urlParam) {
            return this.entityApiService.getOne(urlPrefix, urlParam).flatMap(entityParent => {
                this.entityParent = entityParent;
                this.generateBackLink();
                return Observable.of(entityParent);
            });
        }
        else {
            return Observable.of(null);
        }
    }

    onPrepareEntityError(response: Response) {
        const title = this.translate.instant('ds.messages.http.' + response.status);
        const data = response.json()
        const message = (data && data.error) ? data.error : '';
        this.toastr.error(message, title);
    }

    /**
     * Handle header actions.
     * By default this method attempts to use the routerLink (if any) in the action and navigate to it.
     * @param event { action: object }
     */
    protected handleEntityEvent(event: any) {
        switch (event.action.name) {
            case 'delete':
                this.onDelete();
                break;
            default:
                if (event.action.routerLink) {
                    this.router.navigate(event.action.routerLink, { relativeTo: this.route });
                }
                break;
        }
    }

    onDelete() {
        const modal = this.modal.open(DefaultModal, {size: 'lg'});
        modal.componentInstance.modalHeader = 'Confirm';
        modal.componentInstance.modalContent = `Are you sure you want to delete this entity?`;
        modal.componentInstance.actions = [
            { command: 'yes', label: 'Yes' },
            { command: 'no', label: 'No' },
        ];

        modal.result.then((modalResult) => {
            console.log(modalResult);
            if (modalResult.command === 'yes') {
                this.entity.remove()
                    .subscribe((response) => {
                        this.onEntityDeleteSuccess(response);
                    }, (error) => {
                        this.onEntityDeleteError(error);
                    });
            }
        }, (modalRejection) => {
            // handle the case where the user naturally exits the modal dialog
        });

    }

    onEntityDeleteSuccess(response) {
        console.log('Entity deleted successfully, server response: ', response);
        this.toastr.success(this.translate.instant('ds.messages.entityDeletionSucceeded'));
        this.navigateAfterDeletion();
    }

    onEntityDeleteError(error) {
        console.error('Failed to delete entity', error);
        this.toastr.error(this.translate.instant('ds.messages.entityDeletionFailed'));
    }

    /**
     *
     */
    navigateAfterDeletion(): void {
        this.router.navigate(['../../list'], { relativeTo: this.route });
    }

    /**
     * Stub called when the entity is fetched.
     */
    onEntityPrepared(): void {

    }

    /**
     * Stub called when route params are set.
     */
    onRouteParams(params: Params) {
        this.routeParams = params;
    }

    /**
     * Change visibility of action buttons.
     * @param actionName
     * @param isVisible
     */
    protected setActionVisibility(actionName: string, isVisible: boolean) {
        this.actions = this.actions.map(action => {
            switch (action.name) {
                case actionName:
                    action.visible = isVisible;
                    break;
            }

            return action;
        });
    }
}
