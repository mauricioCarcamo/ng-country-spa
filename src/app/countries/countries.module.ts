import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    ByRegionPageComponent,
    CountryPageComponent,
    ByCountryPageComponent,
    ByCapitalPageComponent,
    TableComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
  exports: [
  ],
})
export class CountriesModule {}
