import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  if (loginService.isLoggedIn.getValue()) {
    return true;
  }
  return loginService.isLoggedIn; // Assuming this is an Observable<boolean> or BehaviorSubject<boolean>
};
