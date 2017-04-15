package be.pdp.hulahoop.dao;

import be.pdp.hulahoop.domain.GeographicalData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by peterdp on 07/04/2017.
 */
@Repository
public interface GeographicalDataRepository extends JpaRepository<GeographicalData, Long> {

    @Query("SELECT DISTINCT g.province FROM GeographicalData g")
    List<String> findDistinctProvince();

}
