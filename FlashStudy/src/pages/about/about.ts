import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthenticationProvider) {

      let user = auth.getUser();
      if(user != null){
        console.log(user.email);
      }
      
  }

  goBack(){
    this.navCtrl.pop();
  }

}
