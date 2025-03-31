import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistsComponent } from 'src/app/components/artist/artist.component';
import LoginComponent from './modules/auth/pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { WorksComponent } from './components/works/works.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UploadComponent } from './components/upload/upload.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'artistas', component: ArtistsComponent },
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'animadores3D/usuariosRegistrados', component: UsersComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'carrito', component: CarritoComponent,  canActivate:[AuthGuard], canMatch: [AuthGuard] },
  { path: 'upload', component: UploadComponent },
  { path: 'works', component: WorksComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
