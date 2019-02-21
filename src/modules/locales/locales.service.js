import {setupI18n} from '@lingui/core';

const LocalesService = {
  init({locales, language}) {
    let catalogs = {};
    catalogs[language] = {
      messages: locales
    };
    this.i18n = setupI18n({language, catalogs})
  },
  getLocales() {
    return this.i18n;
  }
}

export default LocalesService;