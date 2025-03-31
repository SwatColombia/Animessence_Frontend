import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  nombre: string = '';
  usuario:string = '';
  email: string = '';
  password: string = '';
  nacionalidad: string = '';
  urlPortafolio: string = '';
  _id: string = '';

  registerForm: FormGroup;

   
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly registerService: RegisterService,
    private toastr: ToastrService
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      nacionalidad: ['', [Validators.required, Validators.minLength(3)]],
      urlPortafolio: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit() {
    if (this.registerForm.invalid) {
      this.toastr.error('Error al registrar', 'Error con tus datos');
      return;
    }
    this.register();
  }

  register() {
    const animadorData = this.registerForm.value; // Obtener datos del formulario
  
    this.registerService.registar(animadorData).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
  
        if (response && response._id) { // Verifica si la respuesta contiene _id
          console.log('ID del usuario registrado:', response._id);
          localStorage.setItem('userId', response._id); // Guarda el ID en localStorage
          console.log(localStorage.getItem('userId'));
        }
  
        this.toastr.success('Te estamos redirigiendo', 'Te has registrado correctamente');
        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.toastr.error('Formulario incompleto', 'Verifica tus datos');
      }
    });
  }
}
