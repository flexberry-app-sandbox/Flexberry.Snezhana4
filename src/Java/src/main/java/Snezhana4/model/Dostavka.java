package Snezhana4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhana4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Доставка
 */
@Entity(name = "IISSnezhana4Доставка")
@Table(schema = "public", name = "Доставка")
public class Dostavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипДоставки")
    private String типдоставки;


    public Dostavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипДоставки() {
      return типдоставки;
    }

    public void setТипДоставки(String типдоставки) {
      this.типдоставки = типдоставки;
    }


}