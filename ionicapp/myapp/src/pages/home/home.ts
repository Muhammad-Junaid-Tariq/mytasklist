import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items=["apple","mango","banana","pomegranate"];

  constructor(public navCtrl: NavController) {

  }

}
