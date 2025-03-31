import { Component } from '@angular/core';
import { ArtistsService } from '../services/artists.service';
import { CarritoService } from '../services/carrito.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  artists: any = [];

  private jsonUrl = 'assets/artist.json';

  constructor(
    private artist: ArtistsService,
    private http: HttpClient,
    private cartService: CarritoService,
    private router: ActivatedRoute,
     private toastr : ToastrService
  ) {
    //obetenemos el params
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {
    this.artist.getArtistById(id).subscribe((artists) => {
      console.log(artists);
      this.artists = artists;
      
    });
   
  }
  agregarAlCarrito(artist: any) {
    this.cartService.addToCart(artist);
    this.toastr.success('Producto Agregado al Carrito', artist.name);
    this.guardarCarritoEnLocalStorage();
    price: Number(artist.price),

    console.log('Producto Agregado :' , artist.name);
  }
  guardarCarritoEnLocalStorage() {
    // Obtén el carrito actual desde el servicio
    const carrito = this.cartService.getCart();

    // Guarda el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
}
