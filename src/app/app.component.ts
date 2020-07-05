import { Component } from '@angular/core';
import { GLOBAL } from './services/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/bootstrap/css/bootstrap.css'],
})
export class AppComponent {
  title = 'curso-angular4-webapp';
  // tslint:disable-next-line: variable-name
  public header_color: string;
  constructor() {
    this.header_color = GLOBAL.header_color;
  }
}
