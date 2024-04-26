package com.Housekeeping.demo.Controller;

import com.Housekeeping.demo.Model.*;
import com.Housekeeping.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
    @GetMapping("/")
    public String Entry(){
        return "Radhe Radhe";
    }

    @Autowired
    UserService userService;

    @GetMapping("/user/{uname}")
    public User findUser(@PathVariable String uname){
        System.out.printf(uname);
        return userService.findUser(uname);
    }

    @PostMapping("/user/login")
    public ResponseEntity<User> login(@RequestBody User user){
        User user1 =  userService.findByUsernameandPassword(user.getUsername(), user.getPassword());
        if(user1 != null){
            return new ResponseEntity<>(user1, HttpStatus.OK);
        }
        return new ResponseEntity<>(new User(),HttpStatus.NOT_FOUND);
    }

    @GetMapping("/alluser")
    public List<User> findAllUser(){
        return userService.findAll();
    }

    @GetMapping("/userId/{uid}")
    public Optional<User> findUser(@PathVariable int uid){
        return userService.findUserById(uid);
    }

    @PostMapping("/adduser")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PutMapping("/updateuser")
    public User updateUser(@RequestBody User user){
            return userService.addUser(user);
    }

    @DeleteMapping("/deleteuser/{uid}")
    public User deleteUser(@PathVariable int uid){
        return userService.deleteUser(uid);
    }


    @Autowired
    RoomService roomService;

    @GetMapping("/allrooms")
    public List<Room> allRooms(){
        return roomService.getrooms();
    }

    @GetMapping("/room/{rid}")
    public Room findRoom(@PathVariable int rid){
        return roomService.findRoom(rid);
    }

    @PostMapping("/addroom")
    public Room addRoom(@RequestBody Room room){
        return roomService.addRoom(room);
    }

    @PutMapping("/updateroom")
    public Room updateRoom(@RequestBody Room room){
        return roomService.addRoom(room);
    }

    @DeleteMapping("/deleteroom/{id}")
    public Room deleteRoom(@PathVariable int id){
        return roomService.deleteR(id);
    }

    @Autowired
    Services services;
    @GetMapping("/allservice")
    public List<Service> service(){
       return services.getService();
    }

    @GetMapping("/service/user/all/{staffid}")
    public List<Service> serviceList(@PathVariable int staffid){
        return services.findUsersServices(staffid);
    }

    @GetMapping("/service/{sid}")
    public Service findService(@PathVariable int sid){
        return services.findService(sid);
    }

    @PostMapping("/addservice")
    public Service addService(@RequestBody Service service){
        return services.newService(service);
    }

    @PutMapping("/updateservice")
    public Service updateService(@RequestBody Service service){
        return services.newService(service);
    }

   @DeleteMapping("/deleteservice/{sid}")
    public Service deleteService(@PathVariable int sid){
        return services.deleteservice(sid);
   }


   @Autowired
    TaskService taskService;

    @GetMapping("/alltask")
    public List<Task> tasks(){
        return taskService.taskList();
    }

    @GetMapping("/task/{id}")
    public Task task(@PathVariable int id){
        return taskService.task(id);
    }

    @GetMapping("/task/user/all/{staffid}")
    public List<Task> taskList(@PathVariable int staffid){
        return taskService.getAllUserTasks(staffid);
    }

    @PostMapping("/addtask")
    public Task addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }

    @PutMapping("/updatetask")
    public Task updateTask(@RequestBody Task task){
        return taskService.addTask(task);
    }

    @DeleteMapping("/deletetask/{id}")
    public Task deleteTask(@PathVariable int id){
        return taskService.deleteTask(id);
    }

//    Complaints

    @Autowired
    ComplainService complainService;

    @GetMapping("/allComplaints")
    public List<Complain> getAllComplaints(){
        return complainService.getAllComplaints();
    }

    @DeleteMapping("/delete/complain/{id}")
    public ResponseEntity<?> deleteComplain(@PathVariable int id){
        return complainService.DeleteComplain(id);
    }
}

