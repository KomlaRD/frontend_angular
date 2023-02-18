import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { faHome, faList, faAddressCard, faInfo, faSignIn } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faHome = faHome;
  faList = faList;
  faAddressCard = faAddressCard;
  faInfo = faInfo;
  signIn = faSignIn;

  constructor(public dialog: MatDialog){

  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}
