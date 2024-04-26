import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RoomService } from '../Services/RoomServices/room.service';
import { StaffService } from '../Services/StaffServices/staff.service';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../Services/taskService/task.service';


export interface PeriodicElement {
  taskId: any;
  roomNumber: any;
  assignedTo: any;
  status: any;
  taskDescription: any;

}



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private staffService: StaffService, public dialog: MatDialog, private taskservice:TaskService) { }


  displayedColumns: string[] = ['taskId', 'roomNumber', 'assignedTo', 'status', 'taskDescription', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(){
    this.taskservice.getAlltasks().subscribe(Response => {
      // Assuming Response is an array of objects that matches the PeriodicElement interface
      this.dataSource.data = Response;
      console.log(Response);
    });

  }

  openDialog(action: string, taskId: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '460px',
      height: '440px',
      data: { action: action, taskId: taskId },
    });
  }

  deleteTask(taskId:any){
    console.log(taskId);
    this.taskservice.deletetask(taskId).subscribe();
  }



}



@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'taskdialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatError, MatInput, FormsModule, MatSelectModule,CommonModule]
})
export class DialogAnimationsExampleDialog {
  roomNumber: any;
  description: any;
  staffId:any;
  status:any;
  action: string;
  allRooms:any;
  allStaff:any;

  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private roomservice: RoomService,
    private staffservice:StaffService,
    private taskservice:TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
  }

  ngOnInit() {

    this.roomservice.getAllRooms().subscribe(Response => {
        this.allRooms = Response
    })

    this.staffservice.getAllstaffs().subscribe(Response => {
      this.allStaff = Response;
    })

    if (this.action === 'Edit') {
      this.taskservice.gettaskBytaskNumber(this.data.taskId).subscribe((Response: any) => {
        
        this.staffId = Response.assignedTo;
        this.description=Response.taskDescription;
        this.status=Response.status;
        this.roomNumber=Response.roomNumber;
    })

  }
}


  Task() {
    const taskData = {
      "taskDescription": this.description,
      "assignedTo": this.staffId,
      "roomNumber": this.roomNumber,
      "status":this.status,
    };
    console.log(taskData);

    if (this.action === 'Add') {
      this.taskservice.addtask(taskData).subscribe(() => {
        alert("Task Added Successfully");
        window.location.reload();
      });
    } else {
      this.roomservice.updateRoom(taskData).subscribe(() => {
        alert("Task Updated Successfully");
        window.location.reload();
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}