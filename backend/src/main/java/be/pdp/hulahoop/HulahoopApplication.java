package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.GeographicalDataRepository;
import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.Body;
import be.pdp.hulahoop.domain.GeographicalData;
import be.pdp.hulahoop.domain.LocationContext;
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
	public CommandLineRunner start(MemberRepository memberRepository, GeographicalDataRepository geographicalDataRepository) {

		return (args) -> {
			geographicalDataRepository.deleteAll();
			GeographicalData geoData = new GeographicalData();
			geoData.setZipCode("2000");
			geoData.setMunicipality("ANTWERPEN");
			geoData.setProvince("ANTWERPEN");
			geoData.setCountry("BELGIUM");
			geographicalDataRepository.save(geoData);

			geoData = new GeographicalData();
			geoData.setZipCode("9000");
			geoData.setMunicipality("GENT");
			geoData.setProvince("OOST-VLAANDEREN");
			geoData.setCountry("BELGIUM");
			geographicalDataRepository.save(geoData);

			geoData = new GeographicalData();
			geoData.setZipCode("3000");
			geoData.setMunicipality("LEUVEN");
			geoData.setProvince("VLAAMS-BRABANT");
			geoData.setCountry("BELGIUM");
			geographicalDataRepository.save(geoData);

			geoData = new GeographicalData();
			geoData.setZipCode("3500");
			geoData.setMunicipality("HASSELT");
			geoData.setProvince("LIMBURG");
			geoData.setCountry("BELGIUM");
			geographicalDataRepository.save(geoData);

			geoData = new GeographicalData();
			geoData.setZipCode("8500");
			geoData.setMunicipality("KORTRIJK");
			geoData.setProvince("WEST-VLAANDEREN");
			geoData.setCountry("BELGIUM");
			geographicalDataRepository.save(geoData);

			memberRepository.deleteAll();

			Member member = new Member();
			member.setFirstName("Peter");
			member.setName("Post");
			member.setNickName("Sperrie");
			member.setGenderRole(GenderRole.TRANS_MALE);
			Body body = new Body();
			body.setWeight((short) 85);
			body.setLength((short) 172);
			body.setSex(Sex.MALE);
			body.setAge((byte)18);
			member.setBody(body);
			LocationContext locationContext = new LocationContext();
			locationContext.setZipCode("2050");
			locationContext.setMunicipality("ANTWERPEN");
			locationContext.setProvince("ANTWERPEN");
			member.setLocationContext(locationContext);
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
			body.setAge((byte)28);
			member.setBody(body);
			locationContext = new LocationContext();
			locationContext.setZipCode("2050");
			locationContext.setMunicipality("ANTWERPEN");
			locationContext.setProvince("ANTWERPEN");
			member.setLocationContext(locationContext);
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
			body.setAge((byte)38);
			member.setBody(body);
			locationContext = new LocationContext();
			locationContext.setZipCode("2050");
			locationContext.setMunicipality("ANTWERPEN");
			locationContext.setProvince("ANTWERPEN");
			member.setLocationContext(locationContext);
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
			body.setAge((byte)48);
			member.setBody(body);
			locationContext = new LocationContext();
			locationContext.setZipCode("2050");
			locationContext.setMunicipality("ANTWERPEN");
			locationContext.setProvince("ANTWERPEN");
			member.setLocationContext(locationContext);
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
			body.setAge((byte)58);
			locationContext = new LocationContext();
			locationContext.setZipCode("2050");
			locationContext.setMunicipality("ANTWERPEN");
			locationContext.setProvince("ANTWERPEN");
			member.setLocationContext(locationContext);
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
			body.setAge((byte)28);
			member.setBody(body);
			locationContext = new LocationContext();
			locationContext.setZipCode("2050");
			locationContext.setMunicipality("ANTWERPEN");
			locationContext.setProvince("ANTWERPEN");
			member.setLocationContext(locationContext);
			memberRepository.save(member);

			List<Member> members = memberRepository.findAll();
			for(Member m : members) {
				System.out.println(m.getNickName());
			}
		};
	}
}
