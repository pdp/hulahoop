package be.pdp.hulahoop;

import javax.persistence.Embeddable;

/**
 * Created by peterdp on 19/03/2017.
 */
@Embeddable
public class Body extends DomainObject {

    private short length;

    private short weight;

    private Hair hair;



}
