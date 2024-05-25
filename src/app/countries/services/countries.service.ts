import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private http = inject( HttpClient )
  private baseUrl = 'https://restcountries.com/v3.1' 

  public getByCapital( capital: string ): Observable<Country[]> {
    return this.http.get<Country[]>( `${this.baseUrl}/capital/${ capital } `)
  }
}
