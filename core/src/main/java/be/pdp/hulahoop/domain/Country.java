package be.pdp.hulahoop.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Created by peterdp on 14/04/2017.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Country {

    private String name;

    private String region;

    private String numericCode;

    private String flag;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getNumericCode() {
        return numericCode;
    }

    public void setNumericCode(String numericCode) {
        this.numericCode = numericCode;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    @Override
    public String toString() {
        return "Name [" + name + "] " + ", region [" + region + "] "
                + "numericCode [" + numericCode + "] " + ", flag " + flag + "]";
    }
}
