import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }
  public canActivate(): boolean {
    return !!(this.authService.user.value);
  }
  public canActivateChild(): boolean {
    return !!(this.authService.user.value);
  }
}
