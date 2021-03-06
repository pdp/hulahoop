package be.pdp.hulahoop.domain;

import be.pdp.hulahoop.DomainObject;
import be.pdp.hulahoop.GenderRole;
import com.google.common.base.Objects;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

import static java.time.LocalDateTime.now;


/**
 * Created by peterdp on 19.03.17.
 */
@Entity
@Table(name = "Member")
public class Member extends DomainObject {

    @Id
    @SequenceGenerator(name = "MEMBER_GEN", sequenceName = "MEMBER_SEQ", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MEMBER_GEN")
    private Long id;

    @Column(name = "MEMBERSHIP_NUMBER")
    private String membershipNumber;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "NAME")
    private String name;

    @Column(name = "NICK_NAME")
    private String nickName;

    @Enumerated(EnumType.STRING)
    @Column(name = "GENDER_ROLE")
    private GenderRole genderRole;

    @Column(name = "PICTURE")
    private String picture;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LAST_LOGON")
    private Date lastLogon;

    @Embedded
    private Body body;

    @Embedded
    private LocationContext locationContext;

    public Member() {
        String currentYear = String.valueOf(now().getYear());
        membershipNumber = currentYear + "-" + UUID.randomUUID();
    }

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


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public GenderRole getGenderRole() {
        return genderRole;
    }

    public void setGenderRole(GenderRole genderRole) {
        this.genderRole = genderRole;
    }

    public Body getBody() {
        return body;
    }

    public void setBody(Body body) {
        this.body = body;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public LocationContext getLocationContext() {
        return locationContext;
    }

    public void setLocationContext(LocationContext locationContext) {
        this.locationContext = locationContext;
    }

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
