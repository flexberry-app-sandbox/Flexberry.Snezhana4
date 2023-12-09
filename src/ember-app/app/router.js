import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhana4-доставка-l');
  this.route('i-i-s-snezhana4-доставка-e',
  { path: 'i-i-s-snezhana4-доставка-e/:id' });
  this.route('i-i-s-snezhana4-доставка-e.new',
  { path: 'i-i-s-snezhana4-доставка-e/new' });
  this.route('i-i-s-snezhana4-заказ-l');
  this.route('i-i-s-snezhana4-заказ-e',
  { path: 'i-i-s-snezhana4-заказ-e/:id' });
  this.route('i-i-s-snezhana4-заказ-e.new',
  { path: 'i-i-s-snezhana4-заказ-e/new' });
  this.route('i-i-s-snezhana4-клиент-l');
  this.route('i-i-s-snezhana4-клиент-e',
  { path: 'i-i-s-snezhana4-клиент-e/:id' });
  this.route('i-i-s-snezhana4-клиент-e.new',
  { path: 'i-i-s-snezhana4-клиент-e/new' });
  this.route('i-i-s-snezhana4-менеджер-l');
  this.route('i-i-s-snezhana4-менеджер-e',
  { path: 'i-i-s-snezhana4-менеджер-e/:id' });
  this.route('i-i-s-snezhana4-менеджер-e.new',
  { path: 'i-i-s-snezhana4-менеджер-e/new' });
  this.route('i-i-s-snezhana4-поставщик-l');
  this.route('i-i-s-snezhana4-поставщик-e',
  { path: 'i-i-s-snezhana4-поставщик-e/:id' });
  this.route('i-i-s-snezhana4-поставщик-e.new',
  { path: 'i-i-s-snezhana4-поставщик-e/new' });
  this.route('i-i-s-snezhana4-производитель-l');
  this.route('i-i-s-snezhana4-производитель-e',
  { path: 'i-i-s-snezhana4-производитель-e/:id' });
  this.route('i-i-s-snezhana4-производитель-e.new',
  { path: 'i-i-s-snezhana4-производитель-e/new' });
  this.route('i-i-s-snezhana4-товар-l');
  this.route('i-i-s-snezhana4-товар-e',
  { path: 'i-i-s-snezhana4-товар-e/:id' });
  this.route('i-i-s-snezhana4-товар-e.new',
  { path: 'i-i-s-snezhana4-товар-e/new' });
});

export default Router;
