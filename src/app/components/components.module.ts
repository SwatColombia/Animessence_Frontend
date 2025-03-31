import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArtistsComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ArtistsService } from '../services/artists.service';
import { CarritoComponent } from './carrito/carrito.component';
import { UploadComponent } from './upload/upload.component';
import { TruncateWordsPipe } from '../pipes/truncate-words.pipe';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    ArtistsComponent,
    HomeComponent,
    WorksComponent,
    UploadComponent,
    CarritoComponent,
  ],
  declarations: [
    ArtistsComponent,
    HomeComponent,
    WorksComponent,
    CarritoComponent,
    UploadComponent,
    TruncateWordsPipe,
    ProfileComponent,
    UsersComponent,
  ],
  imports: [CommonModule, RouterModule,FormsModule],
  providers: [ArtistsService],
})
export class ComponentsModule {}
