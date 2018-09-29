import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {
cards: Array<{front: string, back: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {

   this.cards = [];

   for(let i = 1; i<10;i++){

     this.cards.push({
      front: 'front of card ' + i,
      back: "back of card " + i
     });
   }

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'The back part of the card will be hidden until you tap it',
      buttons: ['OK']
    });
    alert.present();
  }

  goBack(){
    this.navCtrl.pop();
  }

}
