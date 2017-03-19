package be.pdp.hulahoop.domain;

import com.google.common.base.Objects;

import javax.persistence.*;
import java.util.List;

/**
 * Created by peterdp on 19.03.17.
 */
@Entity
@Table(name = "Member")
public class Member extends DomainObject{

    @Column(name = "MEMBERSHIP_NUMBER")
    private String membershipNumber;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "NAME")
    private String name;

    @Column(name = "NICK_NAME")
    private String nickName;

    private Sex sex;

    @Column(name = "GENDER_ROLE")
    private GenderRole genderRole;

    @OneToOne
    private Body body;

    @OneToMany
    @JoinColumn(name="FAVORITE_ID", referencedColumnName="ID")
    private List<Member> favorites;

    @Override
    public boolean equals(Object object) {
        if (object == null) {
            return false;
        }

        if (getClass() != object.getClass()) {
            return false;
        }

        final Member other = (Member) object;
        return Objects.equal(membershipNumber, other.membershipNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(membershipNumber);
    }

}
