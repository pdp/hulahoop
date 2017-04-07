package be.pdp.hulahoop.domain;

import be.pdp.hulahoop.DomainObject;
import be.pdp.hulahoop.Sex;
import org.springframework.stereotype.Controller;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

/**
 * Created by peterdp on 19/03/2017.
 */
@Embeddable
public class Body {

    @Enumerated(EnumType.STRING)
    @Column(name = "SEX")
    private Sex sex;

    //TODO need to use units like kilos, cm etc
    @Column(name = "LENGTH")
    private short length;

    //TODO need to use units like kilos, cm etc
    @Column(name = "WEIGHT")
    private short weight;

    //private Hair hair;


    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    public short getLength() {
        return length;
    }

    public void setLength(short length) {
        this.length = length;
    }

    public short getWeight() {
        return weight;
    }

    public void setWeight(short weight) {
        this.weight = weight;
    }
}
