package be.pdp.hulahoop.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * Created by peterdp on 19/03/2017.
 */
@Embeddable
public class LocationContext {

    @Column(name = "ZIP_CODE")
    private String zipCode;

    @Column(name = "MUNICIPALITY")
    private String municipality;

    @Column(name = "PROVINCE")
    private String province;

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
}


