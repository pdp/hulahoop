package be.pdp.hulahoop.dao;

import be.pdp.hulahoop.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by peterdp on 20/03/2017.
 */
@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
