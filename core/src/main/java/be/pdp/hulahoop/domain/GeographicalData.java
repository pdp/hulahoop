package be.pdp.hulahoop.domain;

import be.pdp.hulahoop.DomainObject;

import javax.persistence.*;
import java.sql.Blob;

/**
 * Created by peterdp on 07/04/2017.
 */
@Entity
@Table(name = "Geographical_Data")
public class GeographicalData extends DomainObject {

    @Id
    @SequenceGenerator(name = "GEODATA_GEN", sequenceName = "GEO_DATA_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEODATA_GEN")
    private Long id;

    private String zipCode;

    private String municipality;

    private String province;

    private String country;

    private Byte[] flag;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Byte[] getFlag() {
        return flag;
    }

    public void setFlag(Byte[] flag) {
        this.flag = flag;
    }
}
