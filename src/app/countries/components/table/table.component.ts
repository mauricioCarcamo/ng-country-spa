import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  @Input({ required: true })
  public countries!: Country[]

}
