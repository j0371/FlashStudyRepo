import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { MenuController } from 'ionic-angular'
import { NewAccountPage } from '../new-account/new-account'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private menu: MenuController) {
    this.menu.swipeEnable(false);
  }

  goToCards(){
    this.navCtrl.push(ListPage);
  }

  clickAccount(){
    this.navCtrl.push(NewAccountPage);
  }

}
