package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.Body;
import be.pdp.hulahoop.domain.GeographicalData;
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

			GeographicalData geoData = new GeographicalData();
			geoData.setZipCode("2000");
			geoData.setMunicipality("ANTWERPEN");
			geoData.setProvince("ANTWERPEN");
			geoData.setCountry("BELGIUM");

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

			member = new Member();
			member.setFirstName("Julien");
			member.setName("Vande perre");
			member.setNickName("Choelie");
			member.setGenderRole(GenderRole.TRANS_WOMAN);
			body = new Body();
			body.setWeight((short) 90);
			body.setLength((short) 180);
			body.setSex(Sex.FEMALE);
			member.setBody(body);
			memberRepository.save(member);

			 member = new Member();
			member.setFirstName("Didier");
			member.setName("Van de Casteele");
			member.setNickName("Dieke");
			member.setGenderRole(GenderRole.TRANS_MALE);
			 body = new Body();
			body.setWeight((short) 85);
			body.setLength((short) 172);
			body.setSex(Sex.MALE);
			member.setBody(body);
			memberRepository.save(member);

			 member = new Member();
			member.setFirstName("Kristof");
			member.setName("Camelbeke");
			member.setNickName("Camel");
			member.setGenderRole(GenderRole.TRANS_MALE);
			 body = new Body();
			body.setWeight((short) 85);
			body.setLength((short) 172);
			body.setSex(Sex.MALE);
			member.setBody(body);
			memberRepository.save(member);

			member = new Member();
			member.setFirstName("Peter");
			member.setName("Post");
			member.setNickName("Sperrie");
			member.setGenderRole(GenderRole.TRANS_MALE);
			 body = new Body();
			body.setWeight((short) 85);
			body.setLength((short) 172);
			body.setSex(Sex.MALE);
			member.setBody(body);
			memberRepository.save(member);

			member = new Member();
			member.setFirstName("Peter");
			member.setName("Post");
			member.setNickName("Sperrie");
			member.setGenderRole(GenderRole.TRANS_MALE);
			body = new Body();
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
