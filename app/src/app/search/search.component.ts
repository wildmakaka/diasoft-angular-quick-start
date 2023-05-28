import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dia-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    // this.searchTextChanged.emit(this.enteredSearchValue);
  }

  public searchCourse(): void {
    console.log('Search ....');
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
