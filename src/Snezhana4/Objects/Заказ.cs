﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Snezhana4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ.
    /// </summary>
    // *** Start programmer edit section *** (Заказ CustomAttributes)

    // *** End programmer edit section *** (Заказ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказE", new string[] {
            "НомерЗаказа as \'Номер заказа\'",
            "Дата as \'Дата\'"})]
    [View("ЗаказL", new string[] {
            "НомерЗаказа as \'Номер заказа\'",
            "Дата as \'Дата\'"})]
    public class Заказ : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомерЗаказа;
        
        private IIS.Snezhana4.Товар fТовар;
        
        private IIS.Snezhana4.Клиент fКлиент;
        
        private IIS.Snezhana4.Менеджер fМенеджер;
        
        private IIS.Snezhana4.Доставка fДоставка;
        
        private IIS.Snezhana4.DetailArrayOfОплата fОплата;
        
        // *** Start programmer edit section *** (Заказ CustomMembers)

        // *** End programmer edit section *** (Заказ CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Дата CustomAttributes)

        // *** End programmer edit section *** (Заказ.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Дата Get start)

                // *** End programmer edit section *** (Заказ.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Заказ.Дата Get end)

                // *** End programmer edit section *** (Заказ.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Дата Set start)

                // *** End programmer edit section *** (Заказ.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Заказ.Дата Set end)

                // *** End programmer edit section *** (Заказ.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)
        public virtual int НомерЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get start)
                int result = this.fНомерЗаказа;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set start)
                this.fНомерЗаказа = value;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Доставка CustomAttributes)

        // *** End programmer edit section *** (Заказ.Доставка CustomAttributes)
        [PropertyStorage(new string[] {
                "Доставка"})]
        [NotNull()]
        public virtual IIS.Snezhana4.Доставка Доставка
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Доставка Get start)

                // *** End programmer edit section *** (Заказ.Доставка Get start)
                IIS.Snezhana4.Доставка result = this.fДоставка;
                // *** Start programmer edit section *** (Заказ.Доставка Get end)

                // *** End programmer edit section *** (Заказ.Доставка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Доставка Set start)

                // *** End programmer edit section *** (Заказ.Доставка Set start)
                this.fДоставка = value;
                // *** Start programmer edit section *** (Заказ.Доставка Set end)

                // *** End programmer edit section *** (Заказ.Доставка Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Клиент CustomAttributes)

        // *** End programmer edit section *** (Заказ.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.Snezhana4.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Клиент Get start)

                // *** End programmer edit section *** (Заказ.Клиент Get start)
                IIS.Snezhana4.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Заказ.Клиент Get end)

                // *** End programmer edit section *** (Заказ.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Клиент Set start)

                // *** End programmer edit section *** (Заказ.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Заказ.Клиент Set end)

                // *** End programmer edit section *** (Заказ.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Менеджер CustomAttributes)

        // *** End programmer edit section *** (Заказ.Менеджер CustomAttributes)
        [PropertyStorage(new string[] {
                "Менеджер"})]
        [NotNull()]
        public virtual IIS.Snezhana4.Менеджер Менеджер
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Менеджер Get start)

                // *** End programmer edit section *** (Заказ.Менеджер Get start)
                IIS.Snezhana4.Менеджер result = this.fМенеджер;
                // *** Start programmer edit section *** (Заказ.Менеджер Get end)

                // *** End programmer edit section *** (Заказ.Менеджер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Менеджер Set start)

                // *** End programmer edit section *** (Заказ.Менеджер Set start)
                this.fМенеджер = value;
                // *** Start programmer edit section *** (Заказ.Менеджер Set end)

                // *** End programmer edit section *** (Заказ.Менеджер Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Товар CustomAttributes)

        // *** End programmer edit section *** (Заказ.Товар CustomAttributes)
        [PropertyStorage(new string[] {
                "Товар"})]
        [NotNull()]
        public virtual IIS.Snezhana4.Товар Товар
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Товар Get start)

                // *** End programmer edit section *** (Заказ.Товар Get start)
                IIS.Snezhana4.Товар result = this.fТовар;
                // *** Start programmer edit section *** (Заказ.Товар Get end)

                // *** End programmer edit section *** (Заказ.Товар Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Товар Set start)

                // *** End programmer edit section *** (Заказ.Товар Set start)
                this.fТовар = value;
                // *** Start programmer edit section *** (Заказ.Товар Set end)

                // *** End programmer edit section *** (Заказ.Товар Set end)
            }
        }
        
        /// <summary>
        /// Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Оплата CustomAttributes)

        // *** End programmer edit section *** (Заказ.Оплата CustomAttributes)
        public virtual IIS.Snezhana4.DetailArrayOfОплата Оплата
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Оплата Get start)

                // *** End programmer edit section *** (Заказ.Оплата Get start)
                if ((this.fОплата == null))
                {
                    this.fОплата = new IIS.Snezhana4.DetailArrayOfОплата(this);
                }
                IIS.Snezhana4.DetailArrayOfОплата result = this.fОплата;
                // *** Start programmer edit section *** (Заказ.Оплата Get end)

                // *** End programmer edit section *** (Заказ.Оплата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Оплата Set start)

                // *** End programmer edit section *** (Заказ.Оплата Set start)
                this.fОплата = value;
                // *** Start programmer edit section *** (Заказ.Оплата Set end)

                // *** End programmer edit section *** (Заказ.Оплата Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказE", typeof(IIS.Snezhana4.Заказ));
                }
            }
            
            /// <summary>
            /// "ЗаказL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказL", typeof(IIS.Snezhana4.Заказ));
                }
            }
        }
    }
}
