import { Component } from '@angular/core';
import { login } from '../../data-type';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  constructor(private userloginService: UserLoginService){}
  ngOnInit(): void {
    this.userloginService.reloadSeller();
  }

  showLogin = true;


  onLogin(data: NgForm){
    console.log(data.value);
    this.userloginService.onLogin(data.value);

  }
  toggleForm(){
     this.showLogin = !this.showLogin
  }
  onSignup(data: NgForm){
    console.log(data.value);
    this.userloginService.onSignup(data.value);
  }

}
