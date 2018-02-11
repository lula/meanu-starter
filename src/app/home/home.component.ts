import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
  <div class="container">
    <h1>Universal starter project built with Angular CLI.</h1>
  </div>
  `
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}