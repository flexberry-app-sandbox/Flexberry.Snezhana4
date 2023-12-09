import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  производитель: DS.attr('string'),
  страна: DS.attr('string'),
  товар: DS.belongsTo('i-i-s-snezhana4-товар', { inverse: null, async: false })
});

export let ValidationRules = {
  производитель: {
    descriptionKey: 'models.i-i-s-snezhana4-производитель.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  страна: {
    descriptionKey: 'models.i-i-s-snezhana4-производитель.validations.страна.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-snezhana4-производитель.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроизводительE', 'i-i-s-snezhana4-производитель', {
    производитель: attr('Производитель', { index: 0 }),
    страна: attr('Страна', { index: 1 })
  });

  modelClass.defineProjection('ПроизводительL', 'i-i-s-snezhana4-производитель', {
    производитель: attr('Производитель', { index: 0 }),
    страна: attr('Страна', { index: 1 })
  });
};
