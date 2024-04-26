import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  showMenu=true;

  constructor(public dialog: MatDialog) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
    var elements = document.getElementsByClassName("Navigation");

    if(this.showMenu==false){
      // Loop through the collection and add the class "navbar" to each element
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("navbar");
      }    
    }
    else{
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("navbar");
      }  

    }
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'loginDialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent,MatFormField,MatLabel,MatInputModule,FormsModule, MatButton],
})
export class DialogDataExampleDialog {
  constructor(private dialogRef: MatDialogRef<DialogDataExampleDialog>) {}

  username:any;
  password:any;


  logIn(){
    alert(this.username)
    alert(this.password)
    alert("LogIn Successfully");
    this.dialogRef.close();

  }
}
