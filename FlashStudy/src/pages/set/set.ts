import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {
cards: Array<{front: string, back: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.cards = [];

   for(let i = 1; i<=10;i++){
     this.cards.push({
      front: 'front of card ' + i,
      back: "back of card " + i
     });
   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

}
