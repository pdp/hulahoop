package be.pdp.hulahoop.dao;

import be.pdp.hulahoop.domain.GeographicalData;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by peterdp on 07/04/2017.
 */
public interface GeographicalDataRepository extends JpaRepository<GeographicalData, Long> {
}
