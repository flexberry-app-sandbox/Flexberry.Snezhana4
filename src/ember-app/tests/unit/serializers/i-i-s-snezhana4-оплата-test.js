import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhana4-оплата', 'Unit | Serializer | i-i-s-snezhana4-оплата', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-snezhana4-оплата',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-snezhana4-способ1',
    'transform:i-i-s-snezhana4-тип-доставки',

    'model:i-i-s-snezhana4-доставка',
    'model:i-i-s-snezhana4-заказ',
    'model:i-i-s-snezhana4-клиент',
    'model:i-i-s-snezhana4-менеджер',
    'model:i-i-s-snezhana4-оплата',
    'model:i-i-s-snezhana4-поставщик',
    'model:i-i-s-snezhana4-производитель',
    'model:i-i-s-snezhana4-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
