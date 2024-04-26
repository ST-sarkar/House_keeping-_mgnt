import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComplainService } from '../Services/ComplainServices/complain.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RoomService } from '../Services/RoomServices/room.service';


export interface PeriodicElement {
  complainId:any;
  customer_name: string;
  roomId: number;
  complainDate: string;
}


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent {


  constructor(private complainService:ComplainService,public dialog: MatDialog){}

  displayedColumns: string[] = ['complainId', 'customer_name', 'roomId', 'complainDate','description','delete'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, taskId: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '460px',
      height: '340px',
      data: { action: action, taskId: taskId },
    });
  }

  ngOnInit(){
    this.complainService.getAllComplaints().subscribe(Response => {
      this.dataSource.data = Response;
    })
  }

  deletecomplain(serviceId:any) {
    console.log(serviceId)
    this.complainService.deleteComplain(serviceId);
    window.location.reload();
  }

}




@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'Complaindialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatError, MatInput, FormsModule, MatSelectModule,CommonModule]
})
export class DialogAnimationsExampleDialog {
  roomNumber: any;
  description: any;
  allRooms:any;
  allStaff:any;
  customer_name:any;

  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
    private roomservice: RoomService,
    private complainService:ComplainService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  ngOnInit() {

    this.roomservice.getAllRooms().subscribe(Response => {
        this.allRooms = Response
    })

    // this.staffservice.getAllstaffs().subscribe(Response => {
    //   this.allStaff = Response;
    // })

    
}


  
  AddComplain(){
    var complainData = {
      "customerName": this.customer_name,
      "roomId": this.roomNumber,
      "description":this.description
    }
    console.log(complainData);

    this.complainService.addNewComplain(complainData).subscribe(Response => {
      window.location.reload();
    });

    


  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}