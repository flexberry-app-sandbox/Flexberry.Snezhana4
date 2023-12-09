import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhana4-доставка', 'Unit | Model | i-i-s-snezhana4-доставка', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
