package be.pdp.hulahoop;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by peterdp on 19.03.17.
 */
@MappedSuperclass
public abstract class DomainObject {

    @Version
    private Integer version;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATED_ON")
    private Date createdOn;

/*    @Column(name = "CREATED_BY")
    private String createdBy;*/

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LASTMODIFIED_ON")
    private Date lastModifiedOn;

/*    @Column(name = "LASTMODIFIED_BY")
    private String lastModifiedBy;
    @Column(name = "creator_user_id")
    private Long creatorUserId;
    @Column(name = "modification_user_id")
    private Long modificationUserId;*/

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

/*    public String getCreatedBy() {
        return createdBy;
    }
    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }*/

    public Date getLastModifiedOn() {
        return lastModifiedOn;
    }

    public void setLastModifiedOn(Date lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
    }

/*    public String getLastModifiedBy() {
        return lastModifiedBy;
    }
    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }*/


}