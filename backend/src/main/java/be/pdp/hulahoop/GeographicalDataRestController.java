package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.GeographicalDataRepository;
import be.pdp.hulahoop.dao.MemberRepository;
import be.pdp.hulahoop.domain.GeographicalData;
import be.pdp.hulahoop.domain.Member;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by peterdp on 07/04/2017.
 */
@RestController
public class GeographicalDataRestController {

    @Inject
    private GeographicalDataRepository geographicalDataRepository;

    @GetMapping("/geodata")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity getGeoData() {
        List<GeographicalData> geographicalData = geographicalDataRepository.findAll();

        return new ResponseEntity(geographicalData.toArray(), HttpStatus.OK);
    }
}
