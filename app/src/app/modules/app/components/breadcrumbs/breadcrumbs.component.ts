import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dia-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export default class BreadcrumbsComponent implements OnInit {
  gfg: MenuItem[] = [];
  home: MenuItem = {};

  ngOnInit() {
    this.gfg = [
      { label: 'Курсы' },
      { label: 'Angular' },
      { label: 'JavaScript' },
      { label: 'TypeScript' },
      { label: 'PrimeNG' },
    ];
    this.home = {
      icon: 'pi pi-home',
      url: 'https://diasoft-angular-quick-start.vercel.app/',
    };
  }
}
