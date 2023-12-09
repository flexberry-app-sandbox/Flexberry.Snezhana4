import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  изображение: DS.attr('string'),
  наименование: DS.attr('string'),
  свойства: DS.attr('string'),
  поставщик: DS.belongsTo('i-i-s-snezhana4-поставщик', { inverse: null, async: false })
});

export let ValidationRules = {
  изображение: {
    descriptionKey: 'models.i-i-s-snezhana4-товар.validations.изображение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-snezhana4-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  свойства: {
    descriptionKey: 'models.i-i-s-snezhana4-товар.validations.свойства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-snezhana4-товар.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-snezhana4-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-snezhana4-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 })
  });
};
