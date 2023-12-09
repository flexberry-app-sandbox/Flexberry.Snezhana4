import {
  defineNamespace,
  defineProjections,
  Model as ПоставщикMixin
} from '../mixins/regenerated/models/i-i-s-snezhana4-поставщик';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПоставщикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
