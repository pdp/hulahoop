package be.pdp.hulahoop.controller;

import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by peterdp on 25/03/2017.
 */
@Controller
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    @RequestMapping(value = "/member", method = RequestMethod.GET)
    public String getMember(Model model) {
        List<Member> members = memberRepository.findAll();
        model.addAttribute("members", members);
        return "member";
    }
}
