package com.Housekeeping.demo.service;

import com.Housekeeping.demo.Model.User;
import com.Housekeeping.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User findUser(String uname) {
        System.out.println(uname);
        return userRepository.findByUsername(uname);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User deleteUser(int uid) {
        System.out.println(uid);
        return userRepository.deleteById(uid);
    }

    public User findByUsernameandPassword(String username,String password){
        return userRepository.findByUsernameAndPassword(username,password);
    }


    public Optional<User> findUserById(int uid) {
        return userRepository.findById(uid);
    }
}
