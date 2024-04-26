package com.Housekeeping.demo.service;

import com.Housekeeping.demo.Model.Complain;
import com.Housekeeping.demo.Repository.ComplainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplainService {

    @Autowired
    ComplainRepository complainRepository;

    public List<Complain> getAllComplaints(){
        return complainRepository.findAll();
    }

    public ResponseEntity<?> DeleteComplain(int id){
        complainRepository.deleteById(id);
        return new ResponseEntity<>("Complain Deleted Successfully", HttpStatus.OK);
    }
}
