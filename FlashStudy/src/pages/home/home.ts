import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { MenuController } from 'ionic-angular'
import { NewAccountPage } from '../new-account/new-account'
import { AboutPage } from '../about/about'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private menu: MenuController) {
    this.menu.swipeEnable(false);
  }

  goToSets(){
    this.navCtrl.push(ListPage);
  }

  clickAccount(){
    this.navCtrl.push(NewAccountPage);
  }

  clickAbout(){
    this.navCtrl.push(AboutPage);
  }

}
