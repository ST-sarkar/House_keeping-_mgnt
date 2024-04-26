import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StaffService } from '../Services/StaffServices/staff.service';
import { TaskService } from '../Services/taskService/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RoomService } from '../Services/RoomServices/room.service';
import { UserService } from '../Services/userServices/user.service';



export interface PeriodicElement {
  serviceId: any;
  roomId: any;
  serviceDate: any;
  note: any;
  staffId: any;
}

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrl: './user-services.component.css'
})
export class UserServicesComponent {

  displayedColumns: string[] = ['serviceId', 'roomId', 'staffId', 'note', 'serviceDate', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  allServices:any;
  userServies:any;


  constructor(private staffService: StaffService, public dialog: MatDialog, private taskservice:TaskService, private userServices:UserService) { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, serviceId: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '460px',
      height: '340px',
      data: { action: action, serviceId: serviceId },
    });
  }

  ngOnInit(){
    this.userServices.getAllservices().subscribe((Response:any) => {
      this.dataSource.data = Response;
      console.log(Response)
    })

   
  }

  deleteService(serviceId:any){
    alert(serviceId);
  }

}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'servicesdialog-animations-example-dialog.html',
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
  userTasks:any;
  note:any;
  taskId:any;
  serviceDate:any;



  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private roomservice: RoomService,
    private staffservice:StaffService,
    private taskservice:TaskService,
    private userServices:UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
  }

  ngOnInit() {

    this.taskservice.getAllUsersTask(5).subscribe((Response:any)=> {
      this.userTasks = Response;
    })

    this.roomservice.getAllRooms().subscribe(Response => {
        this.allRooms = Response
    })


    if (this.action === 'Edit') {
      this.userServices.getserviceByserviceNumber(this.data.serviceId).subscribe((Response: any) => {
        this.taskId = Response.taskId;
        this.note=Response.notes;
        this.roomNumber=Response.roomId;
        this.serviceDate=Response.serviceDate;
    })

  }
}


  Task() {
    const serviceData = {
      "taskId":this.taskId,
      "roomId": this.roomNumber,
      "notes": this.note,
      "staffId": 5
    }

    if (this.action === 'Add') {
      this.userServices.addservice(serviceData)
      this.taskservice.addtask(serviceData).subscribe(() => {
        alert("Service Added Successfully");
        window.location.reload();
      });
      console.log(serviceData);
    } else {
      const serviceData = {
        "serviceId":this.data.serviceId,
        "taskId":this.taskId,
        "roomId": this.roomNumber,
        "notes": this.note,
        "serviceDate":this.serviceDate,
        "staffId": 5
      }
      // this.roomservice.updateRoom(serviceData).subscribe(() => {
      //   alert("Service Updated Successfully");
      //   window.location.reload();
      // });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
