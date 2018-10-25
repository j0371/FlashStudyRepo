import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { SetPage } from '../set/set';

@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {
  
  email: string;
  setId: string;
  frontText: string = "";
  backText: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private db: DatabaseProvider,
              private auth: AuthenticationProvider) {
                this.setId = navParams.get('setId');

                this.email = auth.getUser().email;

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

if(this.frontText === "" || this.backText === ""){
  return;
}

  this.db.addCard(this.email, this.setId, this.frontText, this.backText);
  this.frontText = "";
  this.backText = "";
  }

  goBack(){
    this.navParams.get("setPage").loadCards();
    this.navCtrl.pop();
  }

}
