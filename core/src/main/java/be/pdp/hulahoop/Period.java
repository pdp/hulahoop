package be.pdp.hulahoop;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.util.Date;

/**
 * Created by peterdp on 19/03/2017.
 */
@Embeddable
public class Period {

    @Column(name = "START_DATE")
    private Date startDate;

    @Column(name = "END_DATE")
    private Date endDate;


}
