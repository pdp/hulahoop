package be.pdp.hulahoop.domain;

import be.pdp.hulahoop.DomainObject;
import be.pdp.hulahoop.GenderRole;
import be.pdp.hulahoop.Sex;
import com.google.common.base.Objects;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by peterdp on 19.03.17.
 */
@Entity
@Table(name = "Member")
public class Member extends DomainObject {

    @Column(name = "MEMBERSHIP_NUMBER")
    private String membershipNumber;


    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "NAME")
    private String name;

    @Column(name = "NICK_NAME")
    private String nickName;

//    @Enumerated(EnumType.STRING)
//    private Sex sex;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "GENDER_ROLE")
//    private GenderRole genderRole;

//    @OneToOne
//    @Embedded
//    private Body body;

//    @ManyToMany
//    @JoinTable(
//            name="MEMBER_FAVORITES",
//            joinColumns=@JoinColumn(name="MEMBER", referencedColumnName="ID"),
//            inverseJoinColumns=@JoinColumn(name="FAVORITE", referencedColumnName="ID"))
//    private List<Member> favorites;

//    @OneToOne
//    private Affiliation affiliation;
//
//    private List<CommunicationChannel> communicationChannels;
//
//    private SexualPreference sexualPreference;
//
//    private FamilyContext familyContext;
//
//    private Personality personality;
//
//    private LocationContext locationContext;    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Enumerated(EnumType.STRING)
    @Column(name = "GENDER_ROLE")
    private GenderRole genderRole;

    public String getMembershipNumber() {
        return membershipNumber;
    }

    public void setMembershipNumber(String membershipNumber) {
        this.membershipNumber = membershipNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }
//
//    public Sex getSex() {
//        return sex;
//    }
//
//    public void setSex(Sex sex) {
//        this.sex = sex;
//    }
//
//    public GenderRole getGenderRole() {
//        return genderRole;
//    }
//
//    public void setGenderRole(GenderRole genderRole) {
//        this.genderRole = genderRole;
//    }


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
