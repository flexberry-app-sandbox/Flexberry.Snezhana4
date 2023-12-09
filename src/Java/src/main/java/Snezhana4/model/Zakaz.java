package Snezhana4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhana4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Заказ
 */
@Entity(name = "IISSnezhana4Заказ")
@Table(schema = "public", name = "Заказ")
public class Zakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НомерЗаказа")
    private Integer номерзаказа;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovar")
    @Convert("Tovar")
    @Column(name = "Товар", length = 16, unique = true, nullable = false)
    private UUID _tovarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovar", insertable = false, updatable = false)
    private Tovar tovar;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Menedzher")
    @Convert("Menedzher")
    @Column(name = "Менеджер", length = 16, unique = true, nullable = false)
    private UUID _menedzherid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Menedzher", insertable = false, updatable = false)
    private Menedzher menedzher;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dostavka")
    @Convert("Dostavka")
    @Column(name = "Доставка", length = 16, unique = true, nullable = false)
    private UUID _dostavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dostavka", insertable = false, updatable = false)
    private Dostavka dostavka;

    @OneToMany(mappedBy = "zakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Oplata> oplatas;


    public Zakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомерЗаказа() {
      return номерзаказа;
    }

    public void setНомерЗаказа(Integer номерзаказа) {
      this.номерзаказа = номерзаказа;
    }


}