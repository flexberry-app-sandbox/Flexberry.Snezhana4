﻿




CREATE TABLE Менеджер (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 НомерПаспорта INT NULL,
 Отчество VARCHAR(255) NULL,
 СерияПаспорта INT NULL,
 Телефон INT NULL,
 Фамилия VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказ (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 НомерЗаказа INT NULL,
 Доставка UUID NOT NULL,
 Клиент UUID NOT NULL,
 Менеджер UUID NOT NULL,
 Товар UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Оплата (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Способ VARCHAR(18) NULL,
 Сумма DOUBLE PRECISION NULL,
 Заказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Доставка (
 primaryKey UUID NOT NULL,
 ТипДоставки VARCHAR(9) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Поставщик (
 primaryKey UUID NOT NULL,
 Поставщик VARCHAR(255) NULL,
 Телефон INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиент (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Логин VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Пароль VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Производитель (
 primaryKey UUID NOT NULL,
 Производитель VARCHAR(255) NULL,
 Страна VARCHAR(255) NULL,
 Товар UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товар (
 primaryKey UUID NOT NULL,
 Изображение VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 Свойства VARCHAR(255) NULL,
 Поставщик UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Заказ ADD CONSTRAINT FK92b51719826c88080a1428365f60a94de06b5350 FOREIGN KEY (Доставка) REFERENCES Доставка; 
CREATE INDEX Index92b51719826c88080a1428365f60a94de06b5350 on Заказ (Доставка); 

 ALTER TABLE Заказ ADD CONSTRAINT FKb1de9d7f17d94a5381356ad4cd11b00b038062c9 FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Indexb1de9d7f17d94a5381356ad4cd11b00b038062c9 on Заказ (Клиент); 

 ALTER TABLE Заказ ADD CONSTRAINT FK258dbad759e9fca1fb0719d797856dbd0851e4c3 FOREIGN KEY (Менеджер) REFERENCES Менеджер; 
CREATE INDEX Index258dbad759e9fca1fb0719d797856dbd0851e4c3 on Заказ (Менеджер); 

 ALTER TABLE Заказ ADD CONSTRAINT FKa135dc54a8887a65b138ed8c4c001d0933e9981d FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Indexa135dc54a8887a65b138ed8c4c001d0933e9981d on Заказ (Товар); 

 ALTER TABLE Оплата ADD CONSTRAINT FK3f43a794990f62802512d8897e81eec1ced9d471 FOREIGN KEY (Заказ) REFERENCES Заказ; 
CREATE INDEX Index3f43a794990f62802512d8897e81eec1ced9d471 on Оплата (Заказ); 

 ALTER TABLE Производитель ADD CONSTRAINT FK1040830b8624bd07c47d0863b05911d30131346c FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Index1040830b8624bd07c47d0863b05911d30131346c on Производитель (Товар); 

 ALTER TABLE Товар ADD CONSTRAINT FK382681e013a7e3a2f2749a33627c8d067d43fed4 FOREIGN KEY (Поставщик) REFERENCES Поставщик; 
CREATE INDEX Index382681e013a7e3a2f2749a33627c8d067d43fed4 on Товар (Поставщик); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

