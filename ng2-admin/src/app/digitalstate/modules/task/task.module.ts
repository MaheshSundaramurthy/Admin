import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormioModule } from 'angular-formio';

import { MicroserviceConfig, MicroserviceRestangularProvider } from '../../../shared/providers/microservice.provider';

import { routing } from './routing';
import { EntityApiService } from './entity-api.service';
import { DsBaseMicroserviceModule } from '../base-microservice.module';
import { DsMicroservicesModule } from '../../microservices.module';
import { DsTaskComponent } from './task.component';
import { DsTaskListComponent } from './components/task-list.component';
import { DsTaskActivateComponent } from './components/task-activate.component';
import { DsTaskShowComponent } from './components/task-show.component';
// import { DsTaskCreateComponent } from './components/task-create.component';
// import { DsTaskEditComponent } from './components/task-edit.component';
import { DsSubmissionListComponent } from './components/submission-list.component';
import { DsSubmissionShowComponent } from './components/submission-show.component';


export const MICROSERVICE_NAME = 'tasks';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormioModule,
        NgxDatatableModule,
        DsMicroservicesModule,
        routing,
    ],
    declarations: [
        DsTaskComponent,
        DsTaskListComponent,
        DsTaskActivateComponent,
        DsTaskShowComponent,
        // DsTaskCreateComponent,
        // DsTaskEditComponent,

        DsSubmissionListComponent,
        DsSubmissionShowComponent,
    ],
    providers: [
        EntityApiService,
        MicroserviceConfig,
        MicroserviceRestangularProvider,
    ]
})
export class DsTaskModule extends DsBaseMicroserviceModule {

    getMicroserviceName() {
        return MICROSERVICE_NAME;
    }
}
