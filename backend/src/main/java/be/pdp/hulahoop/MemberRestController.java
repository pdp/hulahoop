package be.pdp.hulahoop;

import be.pdp.hulahoop.domain.Member;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * Created by peterdp on 20/03/2017.
 */
@RestController
public class MemberRestController {

    @RequestMapping("/greeting")
    public String getName(String name) {
        Member member = new Member();
        member.setCreatedOn(new Date());
        return member.getCreatedOn().toString();
    }
}