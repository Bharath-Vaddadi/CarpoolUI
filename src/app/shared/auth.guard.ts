import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route:Router) {

  }
  canActivate() {
    if(localStorage.getItem('token')!=null){
    return true;
  }
  else{
    this.route.navigate(['login']);
    return false;
  }
  }

}
