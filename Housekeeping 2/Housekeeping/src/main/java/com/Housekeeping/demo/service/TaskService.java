package com.Housekeeping.demo.service;

import com.Housekeeping.demo.Model.Task;
import com.Housekeeping.demo.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;

    public List<Task> taskList() {
        return taskRepository.findAll();
    }

    public Task task(int id) {
        return taskRepository.findByTaskId(id);
    }

    public Task addTask(Task task) {
        return taskRepository.save(task);
    }

    public Task deleteTask(int id) {
        return taskRepository.deleteById(id);
    }

    public List<Task> getAllUserTasks(int staffId){
        return taskRepository.findByAssignedTo(staffId);
    }
}
