package com.Housekeeping.demo.service;

import com.Housekeeping.demo.Model.Service;
import com.Housekeeping.demo.Repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class Services {
    @Autowired
    ServiceRepository serviceRepository;

    public List<Service> getService() {
        return serviceRepository.findAll();
    }

    public Service findService(int sid) {
        return serviceRepository.findByServiceId(sid);
    }

    public Service newService(Service service) {
        return serviceRepository.save(service);
    }

    public Service deleteservice(int sid) {
        return serviceRepository.deleteById(sid);
    }

    public List<Service> findUsersServices(int userId){
        return serviceRepository.findBystaffId(userId);
    }

//    public Lis
}
