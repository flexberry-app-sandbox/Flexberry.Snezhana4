import { Serializer as МенеджерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhana4-менеджер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МенеджерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
