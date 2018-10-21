import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { MenuController } from 'ionic-angular'
import { NewAccountPage } from '../new-account/new-account'
import { AboutPage } from '../about/about'
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController,private menu: MenuController,
    private auth: AuthenticationProvider, public alertCtrl: AlertController) {
    this.menu.swipeEnable(false);

    this.signInCheck();

  }

  clickAccount(){
    this.navCtrl.push(NewAccountPage);
  }

  clickAbout(){
    this.navCtrl.push(AboutPage);
  }

  signInCheck(){
    if(this.auth.getUser() != null){
      this.navCtrl.setRoot(ListPage);
    }
  }

  signin(){
  this.auth.login(this.email, this.password)
  .then(response => {
      this.navCtrl.setRoot(ListPage);
  })
  .catch(error => {
      
    if(error.code == "auth/invalid-email"){

      const alert = this.alertCtrl.create({
        title: 'Email not valid',
        subTitle: 'Please input a valid email address',
        buttons: ['OK']
      });
      alert.present();

    }else if(error.code == "auth/user-not-found"){

      const alert = this.alertCtrl.create({
        title: 'Email not found',
        subTitle: 'There isn\'t an account registered with that email',
        buttons: ['OK']
      });
      alert.present();

    }else if(error.code == "auth/wrong-password"){

      const alert = this.alertCtrl.create({
        title: 'Incorrect Password',
        subTitle: 'You have input an incorrect password',
        buttons: ['OK']
      });
      alert.present();

    }else{

      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Something unknown went wrong with the sign-in',
        buttons: ['OK'],
        cssClass: "alert-message"
      });
      alert.present();

    }

  })
}

}
