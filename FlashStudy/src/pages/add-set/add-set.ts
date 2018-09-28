import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-set',
  templateUrl: 'add-set.html',
})
export class AddSetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This button will add the set to your',
      buttons: ['OK']
    });
    alert.present();
  }
}
