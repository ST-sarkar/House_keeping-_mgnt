package com.Housekeeping.demo.Repository;

import com.Housekeeping.demo.Model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String uname);
    User deleteById(int uid);
    User findByUsernameAndPassword(String uname, String password);
}
