package com.Housekeeping.demo.Model;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(schema = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int taskId;

    @Column(name = "task_description")
    private String taskDescription;

    @Column(name = "assigned_to")
    private int assignedTo;

    private int roomNumber;

    @Column(name = "status")
    private String status;

}