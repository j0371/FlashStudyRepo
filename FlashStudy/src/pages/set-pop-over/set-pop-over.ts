import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddCardPage } from '../add-card/add-card'
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-set-pop-over',
  templateUrl: 'set-pop-over.html',
})
export class SetPopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }

  clickRename(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will prompt you to type in the new name for the set',
      buttons: ['OK']
    });
    alert.present();
  }

  clickAddCards(){
    this.navCtrl.push(AddCardPage);
    this.viewCtrl.dismiss();
  }

  clickResetCards(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will make all of the backs of the cards invisible again',
      buttons: ['OK']
    });
    alert.present();
  }

  clickDeleteCards(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will add delete buttons to the cards for you to click',
      buttons: ['OK']
    });
    alert.present();
  }

  clickDeleteSet(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will prompt you to confirm the set deletion',
      buttons: ['OK']
    });
    alert.present();
  }

}
