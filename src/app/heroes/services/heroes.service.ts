import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.url }/heroes`);
  }

  getHeroById( id: string ):Observable<Heroe> {
    return this.http.get<Heroe>(`${ this.url }/heroes/${ id }`)
  }

  getSuggestion( term: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.url }/heroes?q=${ term }&_limit=6`);
  }

  postHero( heroe: Heroe ): Observable<Heroe> {
    return this.http.post<Heroe>(`${ this.url }/heroes`, heroe );
  }

  updateHero( heroe: Heroe ): Observable<Heroe> {
    return this.http.put<Heroe>(`${ this.url }/heroes/${ heroe.id }`, heroe );
  }

  deleteHero( id: string ) {
    return this.http.delete<any>(`${ this.url }/heroes/${ id }`);
  }
}
