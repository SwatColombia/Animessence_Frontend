import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject, tap} from 'rxjs';
import { Router } from '@angular/router';
import { Login } from '../core/models/login.model';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl ='http://localhost:4000/api/animadores3D/login';

  public id?: string
  public token?: string;
  public role?: string;

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(
    private http: HttpClient,
   
    private router: Router,
    /*private tokenService: TokenService,*/
  ) {
    this.updateVariables();
  }
  
  Login(login: Login): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}`, login, ).pipe(
      tap((response: any) => {
        if (response.success) {
          this.id = response.id;
          this.token = response.token;
          this.role = response.role;
          
          console.log(this.id);
          if (this.id) {
            sessionStorage.setItem('id', this.id);
          }
          this.isLoggedIn.next(true);
          this.router.navigate(['/home']);
        }
      }
    ));
    
  } 

  checkIsLogged():Observable<boolean> |boolean{
    if(sessionStorage.getItem('id')){
      this.isLoggedIn.next(true);
      console.log(this.id);
      return true;
    }
    return this.isLoggedIn.value;
  }

  get loginText(): string {
    return this.isLoggedIn.value ? 'Sesión Iniciada' : 'Iniciar Sesión';
  }

  logout() {
    this.isLoggedIn.next(false);
    
    this.router.navigate(['/login']);
    console.log(this.Login);
  }

  updateVariables() {
    if (sessionStorage.getItem('token')) {
      this.isLoggedIn.next(true);
    }
    if (sessionStorage.getItem('id')) {
      this.id = sessionStorage.getItem('id') || undefined;
    }
    if (sessionStorage.getItem('role')) {
      this.role = sessionStorage.getItem('role')!;
    }
  }
}
