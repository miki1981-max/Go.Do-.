//import * as Localization from 'expo-localization';
import {
    getLocales
} from 'expo-localization';
import i18n, { t as translator} from "i18next";
import {
    initReactI18next
} from 'react-i18next';

import en from '../locales/en.json';
import sv from '../locales/sv.json';


const phoneLanguage = getLocales();
const workLanguages = ['en', 'sv'];

export const getLocalFileLanguage = () => {
    if(!phoneLanguage) return 'sv';
    if(Array.isArray(phoneLanguage) === false) return 'sv';
    let findLocalLang = null;
    phoneLanguage.find((el) => {
        if(!el.languageCode) return false;
        const index = workLanguages.indexOf(el.languageCode?.toLowerCase());
        if(index + 1) findLocalLang = workLanguages[index];
    })
    return findLocalLang || 'sv'
}

const currentLanguage = getLocalFileLanguage();

export const languages = [
    {
        type : "en",
        text : "English"
    },
    {
        type : "sv",
        text : "Svenska"
    }
]

const resources = {
    en : {
        translation : en
    },
    sv : {
        translation : sv
    },
}

i18n.use(initReactI18next).init({
    resources : resources,
    lng : currentLanguage,
    fallbackLng : false,
    interpolation : {
        escapeValue : false
    }
})

console.log(currentLanguage)



//i18n.translations = { en, sv };
//i18n.fallbacks = true;
//i18n.locale = Localization.locale;

export const t = translator;
export default i18n;

