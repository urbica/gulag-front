import Immutable from 'immutable';
import { UPDATE } from 'react-intl-redux';

import ruLocale from '../intl/ru';
import enLocale from '../intl/en';

const locales = {
  ru: ruLocale,
  'ru-RU': ruLocale,
  en: enLocale,
  'en-US': enLocale
};

const { language } = window.navigator;
const defaultLocale = locales[language] ? locales[language] : enLocale;

const initialState = Immutable.fromJS(defaultLocale);

export default (state = initialState, action) => {
  if (action.type !== UPDATE) {
    return state;
  }

  return state.merge(action.payload);
};
