package Snezhana4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhana4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Производитель
 */
@Entity(name = "IISSnezhana4Производитель")
@Table(schema = "public", name = "Производитель")
public class Proizvoditel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Производитель")
    private String производитель;

    @Column(name = "Страна")
    private String страна;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovar")
    @Convert("Tovar")
    @Column(name = "Товар", length = 16, unique = true, nullable = false)
    private UUID _tovarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovar", insertable = false, updatable = false)
    private Tovar tovar;


    public Proizvoditel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПроизводитель() {
      return производитель;
    }

    public void setПроизводитель(String производитель) {
      this.производитель = производитель;
    }

    public String getСтрана() {
      return страна;
    }

    public void setСтрана(String страна) {
      this.страна = страна;
    }


}