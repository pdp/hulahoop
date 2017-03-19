package be.pdp.hulahoop.domain;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by peterdp on 19/03/2017.
 */
@Embeddable
public class Body extends DomainObject {

    private short length;

    private short weight;

    private Hair hair;



}
