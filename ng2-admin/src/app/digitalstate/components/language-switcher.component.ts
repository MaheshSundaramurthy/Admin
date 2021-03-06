import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'ds-language-switcher',
    template: `
		<div *ngIf="languages" class="dropdown al-dropdown">
			<a class="toggle-link dropdown-toggle" id="language-dd" data-toggle="dropdown" aria-expanded="false" tabindex="0">
				<i class="fa fa-globe"></i>
                <span class="language-name">{{ currentLanguage.name | translate }}</span>
			</a>
			<ul class="dropdown-menu top-dropdown-menu language-dropdown" aria-labelledby="language-dd">
				<li *ngFor="let lang of getListedLanguages()" class="dropdown-item">
                    <a href="javascript:;" (click)="switchLang(lang.key)">
                        <!--<i class="fa fa-flag"></i>-->
                        {{ lang.name | translate }}
                    </a>
                </li>
			</ul>
		</div>
    `,
    host: {
        class: 'ds-language-switcher'
    }
})
export class DsLanguageSwitcherComponent {

    currentLanguage: object;
    languages: object[];

    transPrefix = 'ds.language-switcher.languages.';

    constructor(protected translate: TranslateService) {

    }

    ngOnInit() {
        // let translateObservables = this.translate.getLangs().map((langKey) => this.translate.get('ds.language-switcher.languages.' + langKey));
        //
        // Observable.forkJoin(translateObservables).subscribe((something) => {
        //     console.log('DsLanguageSwitcherComponent', something);
        // });

        let langs = this.translate.getLangs();
        let translateObservables = langs.map((langKey) => {
            return this.translate.get(this.transPrefix + langKey).map(langValue =>
                ({
                    key: langKey,
                    name: langValue
                })
            );
        });

        Observable.forkJoin(translateObservables).subscribe((combinedLangs) => {
            console.log('DsLanguageSwitcherComponent', combinedLangs);

            this.languages = combinedLangs;

            console.log(this.languages);
            this.loadCurrentLanguageTranslation();
        });



    }

    switchLang(lang: string) {
        this.translate.use(lang).subscribe((translationDocument) => {
            localStorage.setItem('lang', lang);
            this.loadCurrentLanguageTranslation();
            return Observable.of({ lang: lang, translations: translationDocument });
        });
    }

    getListedLanguages() {
        return this.languages.filter((language) => (language['key'] !== this.translate.currentLang));
    }

    protected loadCurrentLanguageTranslation() {
        this.currentLanguage = {
            key: this.translate.currentLang,
            name: this.translate.instant('ds.language-switcher.languages.' + this.translate.currentLang)
        };
    }
}
