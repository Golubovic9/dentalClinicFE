import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class Auth implements CanActivate {

    constructor(private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        
        if (localStorage.getItem("token")) {
            return true;
        }
        this.router.navigate(['login']);
        return false; 
   }
}
