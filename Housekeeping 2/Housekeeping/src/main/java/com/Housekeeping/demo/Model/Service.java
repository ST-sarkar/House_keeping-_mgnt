package com.Housekeeping.demo.Model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Builder
@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(schema = "service")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int serviceId;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "service_date")
    @CreationTimestamp
    private LocalDateTime serviceDate;

    @Column(name = "notes")
    private String notes;

    private int staffId;

    private int taskId;




}
