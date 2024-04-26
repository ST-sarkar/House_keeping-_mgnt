package com.Housekeeping.demo.Repository;

import com.Housekeeping.demo.Model.Complain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplainRepository extends JpaRepository<Complain,Integer> {
}
