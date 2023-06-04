import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  @Input()
  isAuthenticated: boolean;

  constructor() {}

  ngOnInit(): void {}
}
