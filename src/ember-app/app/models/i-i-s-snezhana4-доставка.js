import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДоставкаMixin
} from '../mixins/regenerated/models/i-i-s-snezhana4-доставка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДоставкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
