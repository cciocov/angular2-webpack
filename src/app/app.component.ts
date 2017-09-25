import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor() {
    this.title = 'xx';
  }
}
