import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { AuthenticationProvider } from '../../providers/authentication/authentication'

@IonicPage()
@Component({
  selector: 'page-add-set',
  templateUrl: 'add-set.html',
})
export class AddSetPage {

  email: string;
  name: string;
  icon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,private auth: AuthenticationProvider, 
    private db: DatabaseProvider) {

      this.email = auth.getUser().email;
      this.icon = "flask"

  }

  apply(){

    this.db.addSet(this.email, this.name, this.icon);

    this.navParams.get('listPage').loadSets();

    this.navCtrl.pop();
  }

  goBack(){
    this.navCtrl.pop();
  }
  
}