import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  email: string;
  password: string;
  cPassword: string;

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
      })
      .catch(error => {
        const alert = this.alertCtrl.create({
          title: 'Email or Password is incorrect',
          subTitle: 'Your Email must be valid, and your password must be at least 6 characters',
          buttons: ['OK']
        });
        alert.present();
      })

    }else{
      const alert = this.alertCtrl.create({
      title: 'Password confirmation failed',
      subTitle: 'Please input the same password for "password" and "confirm password"',
      buttons: ['OK']
    });
    alert.present();
    }

  }

}
