import { Component } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { NgIf } from '@angular/common'; // adjust path if needed

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  constructor(private loginService: LoginService) {}

  showLogin = true;  
  toggleForm():void{
    this.showLogin = !this.showLogin;
  }
  
  ngOnInit(): void {
    this.loginService.reloadSeller();
  }

  onSignup(signupForm: NgForm): void {
    console.log(signupForm.value);
    this.loginService.onSignup(signupForm.value);
  }

  onLogin(loginForm: NgForm): void {
    console.log(loginForm.value);
    this.loginService.onLogin(loginForm.value);
  }
}
