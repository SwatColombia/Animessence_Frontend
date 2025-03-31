import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { ArtistsService } from './services/artists.service';
import { DetailsComponent } from './details/details.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent, DetailsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    ComponentsModule,
    HttpClientModule,
    
    SharedModule,
    RouterModule,
  ],
  providers: [HttpClient],

  bootstrap: [AppComponent],
})
export class AppModule {}
