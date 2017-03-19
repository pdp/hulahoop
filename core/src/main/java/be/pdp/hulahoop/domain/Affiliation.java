package be.pdp.hulahoop.domain;

import javax.persistence.*;
import java.util.List;

/**
 * Created by peterdp on 19/03/2017.
 */
@Entity
@Table(name = "Affiliation")
public class Affiliation extends DomainObject {

    @ElementCollection
    @CollectionTable(
            name = "Period",
            joinColumns = @JoinColumn(name = "OWNER_ID")
    )
    private List<Period> periods;

}
