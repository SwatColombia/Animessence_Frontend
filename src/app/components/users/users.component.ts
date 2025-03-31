import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users : any [] = [];


  constructor(private usersService: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usersService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (error) => {
        console.error(error);
      }
    });
  
  }
  eliminarUsuario(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usersService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(user => user._id !== id);
        console.log(id);
        this.toastr.success('Usuario eliminado', 'Éxito');
      });
    }
  }
}
