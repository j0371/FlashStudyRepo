import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { HomePage } from '../home/home'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@IonicPage()
@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  email: string = "";
  password: string = "";
  cPassword: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private auth: AuthenticationProvider) {
  }

  goBack(){
    this.navCtrl.pop();
  }

  register() {

    if(this.password === this.cPassword){

      this.auth.register(this.email, this.password)
      .then(response => {

        this.navCtrl.setRoot(HomePage);

        const alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Account Created Successfully',
          buttons: ['OK'],
          cssClass: "alert-message"
        });
        alert.present();
  
      })
      .catch(error => {

        if(error.code == 'auth/invalid-email'){
        const alert = this.alertCtrl.create({
          title: 'Email not valid',
          subTitle: 'Please input a valid email address',
          buttons: ['OK'],
          cssClass: "alert-message"
        });
        alert.present();
        }else if(error.code == 'auth/weak-password'){

        const alert = this.alertCtrl.create({
          title: 'Password is too weak',
          subTitle: 'Your password must be at least 6 characters long',
          buttons: ['OK'],
          cssClass: "alert-message"
        });
        alert.present();

        }else if(error.code == 'auth/email-already-in-use'){

          const alert = this.alertCtrl.create({
            title: 'email already used',
            subTitle: 'There is already an account registered with that email',
            buttons: ['OK'],
            cssClass: 'alert-message'
          });
          alert.present();

        }else{

          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Something unknown went wrong with the registration',
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
