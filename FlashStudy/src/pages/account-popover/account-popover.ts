import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { HomePage } from '../home/home'
import { ViewController } from 'ionic-angular';
import { AccountSettingsPage } from '../account-settings/account-settings';


@IonicPage()
@Component({
  selector: 'page-account-popover',
  templateUrl: 'account-popover.html',
})
export class AccountPopoverPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private auth: AuthenticationProvider,
    public viewCtrl: ViewController) {
  }

  signout(){
    console.log("Signed out")
    this.auth.logout();
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(HomePage);
  }

  goToAccountSettings(){
    this.viewCtrl.dismiss();
    this.navCtrl.push(AccountSettingsPage);
  }

}
