import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    username: "",
    password: "",
    remember: false
  }

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {

  }

  onSubmit() {
    console.log(`$user`)
    this.dialogRef.close();
  }

}
