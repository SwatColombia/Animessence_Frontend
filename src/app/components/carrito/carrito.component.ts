import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  artists: any[] = [];
  total: number = 0;
    
  constructor(
    private cartService: CarritoService,
    private router: RouterModule,
    private toastr: ToastrService
   ) { }
  
  ngOnInit() {
    this.cartService.getCart().subscribe((artist) => {
      this.artists = artist;
      this.calcularTotal();
      
    });
  }
  eliminarArtista(index: number) {
    this.cartService.removeFromCart(index);
    this.toastr.error('Producto eliminado del Carrito', this.artists[index]);
    this.calcularTotal();
  }

  vaciarCarrito() {
    this.cartService.clearCart();
    this.artists = [];
    this.total = 0;
    this.toastr.info('Carrito Vacio', this.artists[0]);
    console.log(this.total);
  }
  calcularTotal() {
    this.total = this.artists.reduce((acc, artist) => {
      // Asegúrate de que price y quantity sean números
      const price = Number(artist.price);
      const quantity = Number(artist.quantity) || 1;  // Si quantity no está definido, usar 1
      return acc + (price * quantity); // Multiplicamos price por quantity y lo sumamos
    }, 0);
  }
}

