import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { DatabaseProvider } from '../../providers/database/database'
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-set',
  templateUrl: 'edit-set.html',
})
export class EditSetPage {

  email: string;
  setId: string;
  name: string;
  icon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthenticationProvider, private db: DatabaseProvider,
    public alertCtrl: AlertController) {

    this.setId = this.navParams.get('setId');
    this.email = auth.getUser().email;
    this.icon = "flask"

    this.db.getSetName(this.email, this.setId)
    .then(doc => {
      this.name = doc.data().name
    })

  }

  goBack(){
    this.navCtrl.pop();
  }

  apply(){

    if(this.name === ""){
      
      const alert = this.alertCtrl.create({
        title: 'No Name',
        subTitle: 'Please Input a Name for the Set',
        buttons: ['OK']
      });
      alert.present();

      return;

    }

    this.db.changeSet(this.email, this.setId, this.name, this.icon)

    this.navCtrl.setRoot(ListPage);
  }

}
