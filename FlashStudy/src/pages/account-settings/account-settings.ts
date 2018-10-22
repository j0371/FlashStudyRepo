import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html',
})
export class AccountSettingsPage {

  newPassword: string;
  cPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthenticationProvider, public alertCtrl: AlertController) {
  }

  goBack(){
    this.navCtrl.pop();
  }

  changePassword(){
   
    if(this.newPassword === this.cPassword){

      let user = this.auth.getUser();
      user.updatePassword(this.newPassword)
      .then(response => {

        this.navCtrl.pop();

        const alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Password Reset Successfully',
          buttons: ['OK'],
          cssClass: "alert-message"
        });
        alert.present();

      })
      .catch(error => {

        if(error.code == 'auth/weak-password'){

          const alert = this.alertCtrl.create({
            title: 'Password is too weak',
            subTitle: 'Your password must be at least 6 characters long',
            buttons: ['OK'],
            cssClass: "alert-message"
          });
          alert.present();

        }else if(error.code == 'auth/requires-recent-login'){

          const alert = this.alertCtrl.create({
            title: 'Sign In not recent',
            subTitle: 'Please sign in again to reset your password',
            buttons: ['OK'],
            cssClass: "alert-message"
          });
          alert.present();

        }

      })

    }else{
      const alert = this.alertCtrl.create({
      title: 'Password confirmation failed',
      subTitle: 'Please input the same password for "password" and "confirm password"',
      buttons: ['OK'],
      cssClass: "alert-message"
    });
    alert.present();
    }

  }

}
