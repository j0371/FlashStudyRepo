import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ListPage } from '../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCards(): void{
    this.navCtrl.push(ListPage);
  }

}
