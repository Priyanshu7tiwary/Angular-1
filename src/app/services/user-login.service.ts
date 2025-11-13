import { Injectable } from '@angular/core';
import { login } from '../data-type';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {



    isLoggedIn = new BehaviorSubject<boolean>(false);
    private usersubject = new BehaviorSubject<string | null>(null);
    user$ : Observable<string | null> = this.usersubject.asObservable();
    sellerName = new BehaviorSubject<string>('user');
  
    constructor(private http: HttpClient,private router : Router ) {}  
  
    onSignup(data: login) {
    this.http.get<any[]>(`http://localhost:3000/userLogin?email=${data.email}`,
      {observe: 'response'}
    ).subscribe((users:any) => {
      console.warn(users);
        if (users&& users.body&&users.body.length>0) {
          alert('User already exists');
          console.log('body',users.body);  
          this.router.navigate(['userlogin']);
        } else {
          this.http.post('http://localhost:3000/userLogin', data).subscribe((result) => {
            this.isLoggedIn.next(true);
            this.usersubject.next(data.email);
            this.sellerName.next(data.email);
            console.log('postdone');
            localStorage.setItem('user', String(this.usersubject.value));
            this.router.navigate(['userProducts']);
          });
        }
      });
    }
    reloadSeller(){
      if(localStorage.getItem('user')){
        this.isLoggedIn.next(true);
        this.sellerName.next(String(localStorage.getItem('user')));
        this.usersubject.next(localStorage.getItem('user'));
        this.router.navigate(['userProducts']);
      }
    }
    onLogin(data: login) {
    this.http.get<any[]>(`http://localhost:3000/userLogin?email=${data.email}&password=${data.password}`,
      {observe: 'response'}
    ).subscribe((users:any) => {
      console.warn(users);
        if (users&& users.body&&users.body.length>0) {
          this.isLoggedIn.next(true);
          this.sellerName.next(data.email);
          this.usersubject.next(data.email);
          localStorage.setItem('user', String(this.usersubject.value));
          this.router.navigate(['userProducts']);
        } else {
          alert('Invalid credentials');
          this.isLoggedIn.next(false);
        }
      });
  
  
  }
    logout() {
    console.log('logout');
    this.isLoggedIn.next(false);
    this.sellerName.next('user');
    localStorage.removeItem('user');
    this.router.navigate(['/userLogin']);
  }
}
