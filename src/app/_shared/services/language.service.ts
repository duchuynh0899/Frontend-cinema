import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    langs = [
        {
            value: 'en',
            label: 'English',
        },
        {
            value: 'lo',
            label: 'ປະເທດລາວ',
        }
    ];

    constructor(private translate: TranslateService) {
        const defaultLang = this.langs.find(x => navigator.language.startsWith(x.value))?.value || 'en';
        translate.setDefaultLang(defaultLang);
        const lang = localStorage.getItem('lang');
        this.setLanguage(lang || translate.defaultLang);
    }

    get currentLang() {
        return this.langs.find((x) => x.value === this.translate.currentLang);
    }

    setLanguage(value: string) {
        const lang = this.langs.find((x) => x.value === value);
        if (!lang) { return; }
        this.translate.use(lang.value);
        localStorage.setItem('lang', lang.value);
        const language = lang.value === 'zh' ? 'zh-cn' : lang.value;
        moment.updateLocale(language, { calendar: { sameElse: 'DD/MM/YYYY' } });
    }
}
