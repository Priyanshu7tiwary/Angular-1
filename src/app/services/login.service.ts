import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Correct import here
import { RouterModule, Router } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { Observable } from 'rxjs';
import { login, signUp } from '../data-type';
import { LoginComponent } from '../seller/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  sellerName = new BehaviorSubject<string>('user');

  constructor(private http: HttpClient,private router : Router ) {}  

  onSignup(data: login) {
  this.http.get<any[]>(`http://localhost:3000/login?email=${data.email}`,
    {observe: 'response'}
  ).subscribe((users:any) => {
    console.warn(users);
      if (users&& users.body&&users.body.length>0) {
        alert('User already exists');
        console.log('body',users.body);  
        this.router.navigate(['login']);
      } else {
        this.http.post('http://localhost:3000/login', data).subscribe((result) => {
          this.isLoggedIn.next(true);
          this.sellerName.next(data.email);
          console.log('postdone');
          localStorage.setItem('seller', JSON.stringify(result));
          this.router.navigate(['sellerHome']);
        });
      }
    });
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isLoggedIn.next(true);
      this.router.navigate(['sellerHome']);
    }
  }
  onLogin(data: login) {
  this.http.get<any[]>(`http://localhost:3000/login?email=${data.email}&password=${data.password}`,
    {observe: 'response'}
  ).subscribe((users:any) => {
    console.warn(users);
      if (users&& users.body&&users.body.length>0) {
        this.isLoggedIn.next(true);
        this.sellerName.next(data.email);
        localStorage.setItem('seller', JSON.stringify(users.body));
        this.router.navigate(['sellerHome']);
      } else {
        console.log('hellop',users);
        alert('Invalid credentials');
        this.isLoggedIn.next(false);
      }
    });


}
  logout() {
  console.log('logout');
  this.isLoggedIn.next(false);
  this.sellerName.next('user');
  localStorage.removeItem('seller');
  this.router.navigate(['/login']);
}

}
