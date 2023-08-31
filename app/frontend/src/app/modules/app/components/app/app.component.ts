import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoadingSelector } from 'src/app/modules/courses/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AppComponent implements OnInit {
  public showLoader$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.showLoader$ = this.store.pipe(select(isLoadingSelector));
  }
}
