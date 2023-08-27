import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoadingSelector } from 'src/app/modules/courses/store/selectors';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  public showLoader$: Observable<boolean>;

  constructor(private loaderService: LoaderService, private store: Store) {}

  ngOnInit(): void {
    this.showLoader$ = this.store.pipe(select(isLoadingSelector));
  }
}
