import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типДоставки: DS.attr('i-i-s-snezhana4-тип-доставки')
});

export let ValidationRules = {
  типДоставки: {
    descriptionKey: 'models.i-i-s-snezhana4-доставка.validations.типДоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоставкаE', 'i-i-s-snezhana4-доставка', {
    
  });

  modelClass.defineProjection('ДоставкаL', 'i-i-s-snezhana4-доставка', {
    
  });
};
