import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSnezhana4ДоставкаLForm from './forms/i-i-s-snezhana4-доставка-l';
import IISSnezhana4ЗаказLForm from './forms/i-i-s-snezhana4-заказ-l';
import IISSnezhana4КлиентLForm from './forms/i-i-s-snezhana4-клиент-l';
import IISSnezhana4МенеджерLForm from './forms/i-i-s-snezhana4-менеджер-l';
import IISSnezhana4ПоставщикLForm from './forms/i-i-s-snezhana4-поставщик-l';
import IISSnezhana4ПроизводительLForm from './forms/i-i-s-snezhana4-производитель-l';
import IISSnezhana4ТоварLForm from './forms/i-i-s-snezhana4-товар-l';
import IISSnezhana4ДоставкаEForm from './forms/i-i-s-snezhana4-доставка-e';
import IISSnezhana4ЗаказEForm from './forms/i-i-s-snezhana4-заказ-e';
import IISSnezhana4КлиентEForm from './forms/i-i-s-snezhana4-клиент-e';
import IISSnezhana4МенеджерEForm from './forms/i-i-s-snezhana4-менеджер-e';
import IISSnezhana4ПоставщикEForm from './forms/i-i-s-snezhana4-поставщик-e';
import IISSnezhana4ПроизводительEForm from './forms/i-i-s-snezhana4-производитель-e';
import IISSnezhana4ТоварEForm from './forms/i-i-s-snezhana4-товар-e';
import IISSnezhana4ДоставкаModel from './models/i-i-s-snezhana4-доставка';
import IISSnezhana4ЗаказModel from './models/i-i-s-snezhana4-заказ';
import IISSnezhana4КлиентModel from './models/i-i-s-snezhana4-клиент';
import IISSnezhana4МенеджерModel from './models/i-i-s-snezhana4-менеджер';
import IISSnezhana4ОплатаModel from './models/i-i-s-snezhana4-оплата';
import IISSnezhana4ПоставщикModel from './models/i-i-s-snezhana4-поставщик';
import IISSnezhana4ПроизводительModel from './models/i-i-s-snezhana4-производитель';
import IISSnezhana4ТоварModel from './models/i-i-s-snezhana4-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhana4-доставка': IISSnezhana4ДоставкаModel,
    'i-i-s-snezhana4-заказ': IISSnezhana4ЗаказModel,
    'i-i-s-snezhana4-клиент': IISSnezhana4КлиентModel,
    'i-i-s-snezhana4-менеджер': IISSnezhana4МенеджерModel,
    'i-i-s-snezhana4-оплата': IISSnezhana4ОплатаModel,
    'i-i-s-snezhana4-поставщик': IISSnezhana4ПоставщикModel,
    'i-i-s-snezhana4-производитель': IISSnezhana4ПроизводительModel,
    'i-i-s-snezhana4-товар': IISSnezhana4ТоварModel
  },

  'application-name': 'Snezhana4',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Snezhana4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhana4',
          title: 'Snezhana4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        snezhana4: {
          caption: 'Snezhana4',
          title: 'Snezhana4',
          'i-i-s-snezhana4-менеджер-l': {
            caption: 'Менеджер',
            title: ''
          },
          'i-i-s-snezhana4-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-snezhana4-доставка-l': {
            caption: 'Доставка',
            title: ''
          },
          'i-i-s-snezhana4-поставщик-l': {
            caption: 'Поставщик',
            title: ''
          },
          'i-i-s-snezhana4-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-snezhana4-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-snezhana4-товар-l': {
            caption: 'Товар',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-snezhana4-доставка-l': IISSnezhana4ДоставкаLForm,
    'i-i-s-snezhana4-заказ-l': IISSnezhana4ЗаказLForm,
    'i-i-s-snezhana4-клиент-l': IISSnezhana4КлиентLForm,
    'i-i-s-snezhana4-менеджер-l': IISSnezhana4МенеджерLForm,
    'i-i-s-snezhana4-поставщик-l': IISSnezhana4ПоставщикLForm,
    'i-i-s-snezhana4-производитель-l': IISSnezhana4ПроизводительLForm,
    'i-i-s-snezhana4-товар-l': IISSnezhana4ТоварLForm,
    'i-i-s-snezhana4-доставка-e': IISSnezhana4ДоставкаEForm,
    'i-i-s-snezhana4-заказ-e': IISSnezhana4ЗаказEForm,
    'i-i-s-snezhana4-клиент-e': IISSnezhana4КлиентEForm,
    'i-i-s-snezhana4-менеджер-e': IISSnezhana4МенеджерEForm,
    'i-i-s-snezhana4-поставщик-e': IISSnezhana4ПоставщикEForm,
    'i-i-s-snezhana4-производитель-e': IISSnezhana4ПроизводительEForm,
    'i-i-s-snezhana4-товар-e': IISSnezhana4ТоварEForm
  },

});

export default translations;
