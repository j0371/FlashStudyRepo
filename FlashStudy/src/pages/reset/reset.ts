import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { auth } from 'firebase';
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthenticationProvider, public alertCtrl: AlertController) {
  }

  goBack(){
    this.navCtrl.pop();
  }

  sendReset(){

    this.auth.resetPassword(this.email)
    .then(response => {

      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Reset Email Successfully Sent',
        buttons: ['OK'],
        cssClass: "alert-message"
      });
      alert.present();

      this.navCtrl.pop();
    })
    .catch(error => {

      if(error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found'){

        const alert = this.alertCtrl.create({
          title: 'Invalid Email',
          subTitle: 'There is no account assigned to that email',
          buttons: ['OK'],
          cssClass: "alert-message"
        });
        alert.present();

      }else {

        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Something unknown went wrong with the registration',
          buttons: ['OK'],
          cssClass: "alert-message"
        });
        alert.present();

      }

    })
    
  }

}