import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
  <div class="container">
    <h1>MEAnU - MongoDB Express Angular Universal</h1>
    <p>Built with Angular CLI. Using:</p> 
    <ul>
      <li>Angular @ 5.2.3</li>
      <li>Angular Material @ 5.2.0</li>
      <li>Angular CLI @ 1.6.7</li>
      <li>Express @ 4.16.2</li>
      <li>Mongoose 5.0.4</li>
    </ul>
  </div>
  `
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}