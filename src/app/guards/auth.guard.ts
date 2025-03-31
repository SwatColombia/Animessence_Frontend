import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({providedIn: 'root'})
export class AuthGuard  implements CanActivate , CanMatch {
    
    
 constructor( private loginService : LoginService) { }

 private checkIsLogged(): boolean | Observable<boolean> {

    return this.loginService.checkIsLogged();
 }


canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    console.log({route, segments});    

    return this.checkIsLogged();
    throw new Error('Method not implemented.');
    }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log({route, state});
        
        return this.checkIsLogged();
        throw new Error('Method not implemented.');
    }

    
}