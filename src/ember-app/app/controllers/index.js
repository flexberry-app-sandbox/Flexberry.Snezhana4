import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.snezhana4.caption'),
          title: i18n.t('forms.application.sitemap.snezhana4.title'),
          children: [{
            link: 'i-i-s-snezhana4-менеджер-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-менеджер-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-snezhana4-заказ-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-заказ-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-snezhana4-доставка-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-доставка-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-доставка-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-snezhana4-поставщик-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-поставщик-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-snezhana4-клиент-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-snezhana4-производитель-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-производитель-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-snezhana4-товар-l',
            caption: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhana4.i-i-s-snezhana4-товар-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})