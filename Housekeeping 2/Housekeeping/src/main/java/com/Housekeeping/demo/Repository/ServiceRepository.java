package com.Housekeeping.demo.Repository;

import com.Housekeeping.demo.Model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Integer>{
    Service findByServiceId(int sid);

    Service deleteById(int sid);

    List<Service> findBystaffId(int staffId);
}
