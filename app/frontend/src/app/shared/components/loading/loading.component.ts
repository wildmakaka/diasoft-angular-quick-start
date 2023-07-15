import { Component } from '@angular/core';

@Component({
  selector: 'app-dia-loading',
  template:
    '<p-progressSpinner styleClass="w-4rem h-4rem" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"></p-progressSpinner>',
})
export default class LoadingComponent {}
