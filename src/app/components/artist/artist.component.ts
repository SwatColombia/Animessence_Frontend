import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-artist',
  standalone: false,
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistsComponent {
  artists: any[] = [];

  constructor(private artistsService: ArtistsService,
    private httpClient: HttpClientModule,
    private router: RouterModule
  ) { }
  
  ngOnInit(): void {
    this.artistsService.getArtists().subscribe((artists) => {
      this.artists = artists;
      console.log('Artists: ', this.artists);

    });
    
  }
  
}
