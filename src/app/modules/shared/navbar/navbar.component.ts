import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'shared-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  carritoCounter: number = 0;
  menuAbierto= false;

  constructor(
    private carritoService: CarritoService, 
    public loginService: LoginService,
    private router :Router,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.carritoService.carritoCounter$.subscribe((counter) => {
      this.carritoCounter = counter;
      console.log("Productos en carrito:", this.carritoCounter);
    });
  }
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
iniciarSesion() {
    this.router.navigate(['/login']); // Ajusta la ruta si es diferente
    this.menuAbierto = false;
}

  verPerfil() {
    this.router.navigate(['/animadores3D/users']); // Ajusta la ruta si es diferente
    this.menuAbierto = false;
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.toastr.error('Sesión cerrada', 'Hasta pronto');
    this.router.navigate(['/login']);
    this.menuAbierto = false;
  }
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('user'); // Verifica si hay un usuario en sesión
  }

  get loginText(): string {
    return this.isLoggedIn() ? 'Sesión Iniciada' : 'Iniciar Sesión';
  }

}

