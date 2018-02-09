import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  environment = environment;
}
