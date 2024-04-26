package com.Housekeeping.demo.Repository;

import com.Housekeeping.demo.Model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    Room findById(int rid);

    Room deleteById(int id);
}
