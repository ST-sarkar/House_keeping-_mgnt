package com.Housekeeping.demo.service;

import com.Housekeeping.demo.Model.Room;
import com.Housekeeping.demo.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoomService {
    @Autowired
    RoomRepository roomRepository;

    public List<Room> getrooms() {
        return roomRepository.findAll();
    }

    public Room findRoom(int rid) {
        return roomRepository.findById(rid);
    }

    public Room addRoom(Room room) {
        return roomRepository.save(room);
    }

    public Room deleteR(int id) {
        return roomRepository.deleteById(id);
    }
}
