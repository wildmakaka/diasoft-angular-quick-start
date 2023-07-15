import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dia-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export default class SearchComponent {
  public enteredSearchValue = '';

  @Output()
  public searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(): void {
    this.searchCourse();
  }

  public searchCourse(): void {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
