import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'ds-language-switcher',
    template: `
		<div class="dropdown al-dropdown">
			<a class="toggle-link dropdown-toggle fa fa-globe" id="language-dd" data-toggle="dropdown" aria-expanded="false">
				{{currentLanguage.name}}
			</a>
			<ul class="dropdown-menu top-dropdown-menu language-dropdown" aria-labelledby="language-dd">
				<li *ngFor="let lang of languages" class="dropdown-item">
                    <a (click)="switchLang(lang.key)">
                        <i class="fa fa-flag"></i>
                        {{lang.name}}
                    </a>
                </li>
			</ul>
		</div>
    `
})
export class DSLanguageSwitcherComponent {

    currentLanguage: object;
    languages: object;

    constructor(protected translate: TranslateService) {

    }

    ngOnInit() {
        this.languages = this.translate.getLangs().map((langKey) =>
            ({
                key: langKey,
                name: this.translate.instant('ds.language-switcher.languages.' + langKey)
            })
        );

        this.loadCurrentLanguageTranslation();
    }

    switchLang(lang: string) {
        this.translate.use(lang).subscribe((translationDocument) => {
            this.loadCurrentLanguageTranslation();
            // window.changeTranslation(lang);
            return Observable.of({ lang: lang, translations: translationDocument });
        });
    }

    protected loadCurrentLanguageTranslation() {
        this.currentLanguage = {
            key: this.translate.currentLang,
            name: this.translate.instant('ds.language-switcher.languages.' + this.translate.currentLang)
        };
    }
}