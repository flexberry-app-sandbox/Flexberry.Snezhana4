import {
  defineNamespace,
  defineProjections,
  Model as ДоставкаMixin
} from '../mixins/regenerated/models/i-i-s-snezhana4-доставка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДоставкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
