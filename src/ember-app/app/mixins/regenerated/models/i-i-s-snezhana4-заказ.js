import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерЗаказа: DS.attr('number'),
  доставка: DS.belongsTo('i-i-s-snezhana4-доставка', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-snezhana4-клиент', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-snezhana4-менеджер', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-snezhana4-товар', { inverse: null, async: false }),
  оплата: DS.hasMany('i-i-s-snezhana4-оплата', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доставка: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.доставка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-snezhana4-заказ.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-snezhana4-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-snezhana4-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
