package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.Member;
import com.google.common.collect.Lists;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
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

    @GetMapping(value = "/members")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity getMembers(@RequestParam("page") int page) {

        Sort sort = new Sort(new Sort.Order(Sort.Direction.DESC, "lastLogon"));

        Pageable pageable = new PageRequest(page, 5, sort);

        Page<Member> membersByLastLogon = memberRepository.findAll(pageable);
        List<Member> members = Lists.newArrayList();
        if(membersByLastLogon.getContent() != null) {
            members = membersByLastLogon.getContent();
        }
        return new ResponseEntity(members.toArray(), HttpStatus.OK);
    }

    @PostMapping(value="/createmember")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Void> createMember(@RequestBody Member member, UriComponentsBuilder ucBuilder) {
        memberRepository.save(member);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/member/{membershipNumber}").buildAndExpand(member.getMembershipNumber()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
