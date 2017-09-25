import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(apollo: Apollo) {
    console.log(apollo);
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
