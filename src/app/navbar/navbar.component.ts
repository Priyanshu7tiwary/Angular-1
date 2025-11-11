import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CommonModule, NgIf } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuType: string = 'default';

  isLoggedIn$: Observable<boolean>; // $ means it's an Observable
  sellerName$: Observable<string>;
  constructor(private loginService: LoginService, private router: Router) {
    this.isLoggedIn$ = loginService.isLoggedIn;
    this.sellerName$ = loginService.sellerName;
  }
  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      console.warn(val);
      if(localStorage.getItem('seller') && val.url.includes('seller'))
        {console.log('sellerArea')
          this.menuType = 'seller';
        }
      else{
        console.log('not seller');
        this.menuType = 'default';
      }
    })
  }
  
  onLogout(): void {
    this.loginService.logout(); // Redirect to login page
  }

}
