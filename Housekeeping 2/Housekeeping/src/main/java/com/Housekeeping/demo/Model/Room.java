package com.Housekeeping.demo.Model;



import jakarta.persistence.*;
import lombok.*;

@Builder
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(schema = "room")
public class Room {
    @Id
    private int roomNumber;

    @Column(name = "room_status")
    private String roomStatus;

    @Column(name = "room_description")
    private String roomDescription;
}
