import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private jsonUrl = 'assets/artist.json';

  constructor(private http: HttpClient, private httpClient: HttpClientModule) {}

  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  // Método para obtener un artista por su ID
  getArtistById(id: string): Observable<any> {
    return this.http
      .get<any[]>(this.jsonUrl)
      .pipe(map((artists) => artists.find((artist) => artist.id === id)));
  }
}
