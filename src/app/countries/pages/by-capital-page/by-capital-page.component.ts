import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountriesModule } from '../../countries.module';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent  {

  private countriesService = inject(CountriesService)

  public countries: Country[] = []

  /**
   * onSearch
   */
  public onSearch( term: string ) {
    console.log( { term });
    this.countriesService.getByCapital( term ).subscribe(
      resp => {
        console.log( resp )
        this.countries = resp
      }
    )
  }

}
