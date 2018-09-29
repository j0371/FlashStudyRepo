import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  clickCreate(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will create a new account with the specified credentials',
      buttons: ['OK']
    });
    alert.present();
  }

  goBack(){
    this.navCtrl.pop();
  }

}
