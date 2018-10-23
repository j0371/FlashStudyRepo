import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {
  
  setId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
                this.setId = navParams.get('setId');

                console.log(this.setId);
  }

  clickImg(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will prompt you to select a picture from your camera/photos, it will be implemented in project 5',
      buttons: ['OK']
    });
    alert.present();
  }

  addCardButton(){
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will add the card to the set and clear the front/back inputs (stays on this page)',
      buttons: ['OK']
    });
    alert.present();
  }

  goBack(){
    this.navCtrl.pop();
  }

}
