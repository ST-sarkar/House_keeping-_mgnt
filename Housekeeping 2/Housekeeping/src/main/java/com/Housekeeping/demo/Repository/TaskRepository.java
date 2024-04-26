package com.Housekeeping.demo.Repository;

import com.Housekeeping.demo.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Integer> {
    Task findByTaskId(int id);

    Task deleteById(int id);

    List<Task> findByAssignedTo(int assignedTo);

}
