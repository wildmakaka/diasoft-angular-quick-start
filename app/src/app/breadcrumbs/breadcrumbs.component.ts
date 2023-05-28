import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dia-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export default class BreadcrumbsComponent {
  gfg: MenuItem[] = [];
  home: MenuItem = {};

  ngOnInit() {
    this.gfg = [
      { label: 'Angular' },
      { label: 'ReactJS' },
      { label: 'HTML' },
      { label: 'JavaScript' },
      { label: 'PrimeNG' },
    ];
    this.home = {
      icon: 'pi pi-home',
      url: 'https://diasoft-angular-quick-start-git-module-02-02-techhead-mailru.vercel.app/',
    };
  }
}
