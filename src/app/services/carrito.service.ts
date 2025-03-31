import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private artist: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);
  cartSubject$ = this.cartSubject.asObservable();

  private carritoCounter = new BehaviorSubject<number>(0);
  carritoCounter$ = this.carritoCounter.asObservable();
  
  constructor() {
    this.loadCart();
  }


  getCart() {
    return this.cartSubject.asObservable();
    
  }

  /** Agregar un producto al carrito */
  addToCart(product: any) {
    this.artist.push(product);
    this.carritoCounter.next(this.artist.length);
    this.saveCart();
  }
  getCarritoCounter() { 
    return this.carritoCounter.value;
  }
  

  /** Eliminar un producto del carrito */
  removeFromCart(index: number) {
    this.artist.splice(index, 1);
    this.saveCart();
  }

  /** Vaciar el carrito */
  clearCart() {
    this.artist = [];
    this.saveCart();
  }

  /** Obtener el total del carrito */
  calcularTotal(): number {
      return this.artist.reduce((acc,artist) =>
      acc + (Number(artist.price) * Number(artist.quantity) || 1), 0);
  }

  /** Guardar el carrito en localStorage */
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.artist));
    this.cartSubject.next(this.artist);
  }

  /** Cargar el carrito desde localStorage */
  private loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.artist = JSON.parse(storedCart);
      this.cartSubject.next(this.artist);
    }
  }
}
