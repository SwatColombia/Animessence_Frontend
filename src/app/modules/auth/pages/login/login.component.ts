import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/core/utils/validator';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/core/models/login.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  email: string = '';
  password: string = '';
  id: string = '';


  loginForm: FormGroup;
  showPassword: boolean = false;
  error: string = 'Error en la aplicacion';

  constructor(
    private readonly loginService: LoginService,
    private readonly fb: FormBuilder,
    private toastr: ToastrService,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  /* get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  } */

    onSubmit() {
      if (this.loginForm.invalid) {
        // Realizar la lógica de inicio de sesión
        this.toastr.error(
          'Error al iniciar sesión',
          'Error con tus datos'
        );
  
        return;
      }
      this.login();
    }

    login() {
      this.loginService.Login(this.loginForm.value).subscribe(response => {
        if (response.success ) {
          
          this.toastr.success('Usuario logeado. Te estamos redirigiendo', 'Bienvenido');
          console.log('usuario logeado');
          console.log(response);
          sessionStorage.setItem('id', response.id);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 3000);
        } else {
          const errorMessage = response.message || 'Error al iniciar sesión';
          this.toastr.error('Error en la aplicación');
          console.log(errorMessage)
        }
      }, error => {
        const errorMessage = error.message || 'Verifica los datos que registraste';
        this.toastr.error('Email o contraseña erronea');
        
      });
  }
}