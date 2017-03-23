package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.Body;
import be.pdp.hulahoop.domain.Member;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class HulahoopApplication {

	public static void main(String[] args) {
		SpringApplication.run(HulahoopApplication.class, args);
	}

	@Bean
	public CommandLineRunner start(MemberRepository memberRepository) {

		return (args) -> {
			Member member = new Member();
			member.setFirstName("Peter");
			member.setName("Post");
			member.setNickName("Sperrie");
			member.setGenderRole(GenderRole.TRANS_MALE);
			Body body = new Body();
			body.setWeight((short) 85);
			body.setLength((short) 172);
			body.setSex(Sex.MALE);
			member.setBody(body);
			memberRepository.save(member);

			List<Member> members = memberRepository.findAll();
			for(Member m : members) {
				System.out.println(m.getNickName());
			}
		};
	}
}
