import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StaffService } from '../Services/StaffServices/staff.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RoomService } from '../Services/RoomServices/room.service';


export interface PeriodicElement {
  userId: any;
  userName: any;
  firstName: any;
  lastName: any;
  phone: any;
  address: any;
  hireDate: any;
}


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  constructor(private staffService: StaffService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['userId', 'userName', 'firstName', 'lastName', 'role', 'type', 'phone', 'address', 'hireDate', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.staffService.getAllstaffs().subscribe(Response => {
      // Assuming Response is an array of objects that matches the PeriodicElement interface
      this.dataSource.data = Response;
      console.log(Response);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, userId: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '460px',
      height: '600px',
      data: { action: action, userId: userId },
    });
  }



  deleteStaff(userId: any) {
    // Logic to handle delete staff action
    this.staffService.deletestaff(userId).subscribe();
    window.location.reload()
    console.log('Delete staff with userId:', userId);
  }
}




@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'staffDialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatError, MatInput, FormsModule, MatSelectModule]
})
export class DialogAnimationsExampleDialog {

  action: string;
  userId: any;
  userName: any;
  firstName: any;
  password: any;
  lastName: any;
  phone: any;
  role: any;
  type: any;
  address: any;
  hireDate: any;


  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private staffservice: StaffService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.action = data.action;
  }

  ngOnInit() {
    if (this.action === 'Edit') {
      this.staffservice.getstaffBystaffNumber(this.data.userId).subscribe((Response: any) => {
        this.userId = Response.id,
          this.userName = Response.username;
        this.password = Response.password;
        this.role = Response.role;
        this.type = Response.type;
        this.firstName = Response.firstName;
        this.lastName = Response.lastName;
        this.phone = Response.phoneNo;
        this.address = Response.address;
        this.hireDate = Response.hireDate
      })

    }
  }

  staff() {

    if (this.action === 'Add') {
      const userData = {
        "username": this.userName,
        "role": this.role,
        "type": this.type,
        "firstName": this.firstName,
        "lastName": this.lastName,
        "phoneNo": this.phone,
        "address": this.address,
      };
      this.staffservice.addstaff(userData).subscribe(() => {
        alert("Staff Added Successfully");
        window.location.reload();
      });
    } else {
      const userData = {
        "id": this.data.userId,
        "username": this.userName,
        "password": this.password,
        "role": this.role,
        "type": this.type,
        "firstName": this.firstName,
        "lastName": this.lastName,
        "phoneNo": this.phone,
        "address": this.address,
        "hireDate":this.hireDate
      };
      this.staffservice.updatestaff(userData).subscribe(() => {

        alert("Room Updated Successfully");
        window.location.reload();
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
