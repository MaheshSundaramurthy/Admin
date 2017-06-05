import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastsManager } from 'ng2-toastr';
import { MicroserviceConfig } from '../../microservice.provider';
import { EntityApiService } from '../entity-api.service';
import { DsBaseEntityFormComponent } from '../../../components/base-entity-form.component';
import 'rxjs/Rx';

@Component({
    selector: 'ds-record-create',
    templateUrl: '../templates/form.template.html'
})
export class DsRecordCreateComponent extends DsBaseEntityFormComponent {

    entityUrlPrefix = 'records';
    headerTitle = 'Create Record';
    isNew = true;

    constructor(route: ActivatedRoute,
                router: Router,
                location: Location,
                toastr: ToastsManager,
                microserviceConfig: MicroserviceConfig,
                entityApiService: EntityApiService) {

        super(route, router, location, microserviceConfig, toastr);
        this.entityApiService = entityApiService;
    }
}