import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLiked: boolean = false;

  constructor(private toastr: ToastrService) {}

  
    likeAnimation() {
      this.isLiked = !this.isLiked;
      // Lógica para manejar el "like"
      this.toastr.success('¡Gracias por tu like!', 'Animessence');
      console.log('Animación marcada como favorita');
    }
  

}
