import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Register } from '../modules/shared/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4000/api/animadores3D/registrar';

  constructor( private http : HttpClient,
    private router : Router
  ) { }

  registar(Registro : Register): Observable<any> {
    
    return this.http.post(`${this.apiUrl}`, 
      Registro).pipe(
          tap(resp => {
            console.log(resp);

          })
        );
  }
  
}
