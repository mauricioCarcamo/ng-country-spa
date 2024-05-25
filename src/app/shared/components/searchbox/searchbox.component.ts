import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: ``
})
export class SearchboxComponent implements OnInit {
  ngOnInit(): void {
    const country = localStorage.getItem('country')

    if (country)
      this.emitTerm( country )

    this.searchBox.setValue( country )
  }

  @Input()
  public placeholder!: string

  @Output()
  public onSearch = new EventEmitter<string>()

  public searchBox = new FormControl('')

  public emitTerm( term: string ) {
    this.onSearch.emit( term )
    localStorage.setItem('country', term)
  }

}
