import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RoomService } from '../Services/RoomServices/room.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  constructor(private roomservice: RoomService, public dialog: MatDialog) { }

  openDialog(action: string, roomNumber:any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '260px',
      data: { action: action, roomId:roomNumber },
    });
  }

  rooms: any;

  ngOnInit() {
    this.roomservice.getAllRooms().subscribe(Response => {
      this.rooms = Response;
    })
  }

  deleteRoom(roomNumber: any) {
    this.roomservice.deleteRoom(roomNumber).subscribe(() => {
      window.location.reload();
    });
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatError, MatInput, FormsModule, MatSelectModule]
})
export class DialogAnimationsExampleDialog {
  roomNumber: any;
  roomStatus:any;
  description: any;
  action: string;

  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private roomservice: RoomService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
  }

  ngOnInit() {
    if (this.action === 'Edit') {
        console.log("Wokring");
        this.roomservice.getRoomByRoomNumber(this.data.roomId).subscribe((Response:any) => {
          this.roomNumber = Response.roomNumber;
          this.roomStatus = Response.roomStatus;
          this.description = Response.roomDescription;

        })
    }
  }

  Room() {
    const roomData = {
      "roomNumber": this.roomNumber,
      "roomStatus": this.roomStatus,
      "roomDescription": this.description
    };

    if (this.action === 'Add') {
      this.roomservice.addRoom(roomData).subscribe(() => {
        alert("Room Added Successfully");
        window.location.reload();
      });
    } else {
      this.roomservice.updateRoom(roomData).subscribe(() => {
        alert("Room Updated Successfully");
        window.location.reload();
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
