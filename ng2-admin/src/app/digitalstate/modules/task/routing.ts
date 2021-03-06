import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../../shared/modules/auth/auth-guard.service';

import { DsTaskComponent } from './task.component';
import { DsTaskListComponent } from './components/task-list.component';
import { DsTaskActivateComponent } from './components/task-activate.component';
import { DsTaskShowComponent } from './components/task-show.component';
// import { DsTaskCreateComponent } from './components/task-create.component';
// import { DsTaskEditComponent } from './components/task-edit.component';

import { DsSubmissionListComponent } from './components/submission-list.component';
import { DsSubmissionShowComponent } from './components/submission-show.component';

const routes: Routes = [

    // Default route is `DsTaskListComponent`. See pages.routing.ts
    {
        path: '',
        component: DsTaskComponent,
        canActivate: [AuthGuardService],
        children: [
            // Uncomment the following to have the default EMPTY route redirect back to the dashboard
            // { path: '', redirectTo: '/pages/dashboard', pathMatch: 'full' },
            { path: '', redirectTo: '/pages/tasks/list', pathMatch: 'full' },
            { path: 'list', component: DsTaskListComponent  },
            { path: ':id/activate', component: DsTaskActivateComponent },
            // { path: 'create', component: DsTaskCreateComponent },
            { path: ':id/show', component: DsTaskShowComponent },
            // { path: ':id/edit', component: DsTaskEditComponent },

            { path: 'submissions/list', component: DsSubmissionListComponent},
            { path: 'submissions/:id/show', component: DsSubmissionShowComponent},
        ]
    }
];

export const routing = RouterModule.forChild(routes);
