import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоставкиEnum from '../enums/i-i-s-snezhana4-тип-доставки';

export default FlexberryEnum.extend({
  enum: ТипДоставкиEnum,
  sourceType: 'IIS.Snezhana4.ТипДоставки'
});
