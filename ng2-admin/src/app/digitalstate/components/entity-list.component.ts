import { Component, Inject, TemplateRef, ViewChild, ContentChild, Output, EventEmitter, Input } from '@angular/core';

// import 'style-loader!../styles/style.scss';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Service } from '../models/service';
import { Link } from '../models/link';

import 'rxjs/Rx';

@Component({
    selector: 'ds-entity-list',
    templateUrl: '../templates/entity-list.template.html'
})
export class DsEntityListComponent {
    @Input() headerTitle: string;
    @Input() headerSubtitle: string;
    @Input() backLink: Link;
    @Input() actions: { [s: string]: boolean };
    @Input() headerActions: Array<object>;
    @Input() headerActionsTemplate: TemplateRef<any>;

    @Output() headerActionEmitter = new EventEmitter();

    @ContentChild(DatatableComponent) datatable: DatatableComponent;

    constructor() {

    }

    ngOnInit() {

    }

    protected emitHeaderAction(action: any) {
        this.headerActionEmitter.emit({ action: action });
    }
}
