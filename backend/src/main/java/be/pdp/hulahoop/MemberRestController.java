package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.Member;
import com.google.common.collect.Lists;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.inject.Inject;
import java.util.Date;
import java.util.List;

/**
 * Created by peterdp on 20/03/2017.
 */
@RestController
public class MemberRestController {

    @Inject
    private MemberRepository memberRepository;

    @GetMapping("/members")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity getMembers() {
        List<Member> members =  memberRepository.findAll();

        return new ResponseEntity(members.toArray(), HttpStatus.OK);
    }
}
