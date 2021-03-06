import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdProgressBarModule, MdCheckboxModule } from '@angular/material';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgArrayPipesModule } from 'ngx-pipes';
import { FilterByPipe } from 'ngx-pipes/src/app/pipes/array/filter-by';

import { NgaModule } from '../../theme/nga.module';

import { DsSharedModule } from '../shared/shared.module';

import { TemplateStorage } from './services/template-storage.service';
import { TemplateStorageComponent } from './components/template-storage.component';
import { DsMicroservicesComponent } from './components/microservices.component';
import { DsEntityListComponent } from './components/entity-list.component';
import { DsEntityShowComponent } from './components/entity-show.component';
import { DsEntityFormComponent } from './components/entity-form.component';
import { DsDatatableHeader } from './components/datatable/datatable-header.component';
import { DsDatatableCell } from './components/datatable/datatable-cell.component';
import { DsDatatableCellUuid } from './components/datatable/datatable-cell-uuid.component';
import { DsDatatableCellActions } from './components/datatable/datatable-cell-actions.component';
import { DsLanguageSwitcherComponent } from './components/language-switcher.component';
import { DsLanguageSwitcherTabsComponent } from './components/language-switcher-tabs.component';
import { DsBackLink } from './components/back-link.component';
import { DsTranslatableIconComponent } from './components/translatable-icon.component';
import { DefaultModal } from './components/modals/default-modal/default-modal.component';

@NgModule({
    imports: [
        DsSharedModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgArrayPipesModule,
        MdProgressBarModule,
        MdCheckboxModule,
        TranslateModule,
    ],
    declarations: [
        DefaultModal,
        TemplateStorageComponent,
        DsMicroservicesComponent,
        DsEntityListComponent,
        DsEntityShowComponent,
        DsEntityFormComponent,
        DsDatatableHeader,
        DsDatatableCell,
        DsDatatableCellUuid,
        DsDatatableCellActions,
        DsLanguageSwitcherComponent,
        DsLanguageSwitcherTabsComponent,
        DsBackLink,
        DsTranslatableIconComponent,
    ],
    entryComponents: [
        DefaultModal,
    ],
    providers: [
        TemplateStorage,
        FilterByPipe,
    ],
    exports: [
        DsSharedModule,
        ReactiveFormsModule,
        MdProgressBarModule,
        MdCheckboxModule,
        DsMicroservicesComponent,
        DsEntityListComponent,
        DsEntityShowComponent,
        DsEntityFormComponent,
        DsDatatableHeader,
        DsDatatableCell,
        DsDatatableCellUuid,
        DsDatatableCellActions,
        DsLanguageSwitcherComponent,
        DsLanguageSwitcherTabsComponent,
        TranslateModule,
        DsTranslatableIconComponent,
    ]
})
export class DsMicroservicesModule {

    // constructor(protected cmsService: CmsApiService,
    //             protected translate: TranslateService) {
    //     // this.loadContent();
    // }
    //
    // private loadContent() {
    //     this.loadTranslations();
    // }
    //
    // private loadTranslations() {
    //     this.cmsService.getTranslations().subscribe((translations: any) => {
    //         console.log('DsMicroservicesModule :: loadTranslations', translations);
    //
    //         if (isObject(translations)) {
    //             forEach(translations, (translation, lang) => {
    //                 this.translate.setTranslation(lang, translation, true);
    //             })
    //         }
    //     }, (err) => { // error
    //         console.warn('DsMicroservicesModule :: loadTranslations :: Unable to load translations', err);
    //     });
    // }
}
