package be.pdp.hulahoop;

import be.pdp.hulahoop.dao.GeographicalDataRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by peterdp on 07/04/2017.
 */
@RestController
@RequestMapping("/geodata")
public class GeographicalDataRestController {

    @Inject
    private GeographicalDataRepository geographicalDataRepository;

    @Inject
    private RestTemplate restTemplate;

    @GetMapping("/provinces")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity getProvinces() {
        List<String> provinces =  geographicalDataRepository.findDistinctProvince();
        return new ResponseEntity(provinces.toArray(), HttpStatus.OK);
    }
}
