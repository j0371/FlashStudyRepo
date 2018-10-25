import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddCardPage } from '../add-card/add-card'
import { ViewController } from 'ionic-angular';
import { EditSetPage } from '../edit-set/edit-set'
import { DatabaseProvider } from '../../providers/database/database'
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { ListPage } from '../list/list'
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@IonicPage()
@Component({
  selector: 'page-set-pop-over',
  templateUrl: 'set-pop-over.html',
})
export class SetPopOverPage {

  delete: boolean;
  setPage: any;
  email: string;
  setId: string;
  listPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public viewCtrl: ViewController,
              private db: DatabaseProvider, private auth: AuthenticationProvider) {

                this.setPage = navParams.get('setPage');
                this.setId = navParams.get('setId');
                this.email = auth.getUser().email;
                this.listPage = this.navParams.get('listPage');

                this.delete = this.setPage.delete;

  }

  clickPersonalize(){
    this.navCtrl.push(EditSetPage, { setId: this.navParams.get('setId') });
  }

  clickAddCards(){
    this.navCtrl.push(AddCardPage, { setId: this.navParams.get('setId'), 
                                     setPage: this.setPage });
    this.viewCtrl.dismiss();
  }

  clickResetCards(){
 
    let cards = this.navParams.get('setPage').cards;

    for(let i = 0;i<cards.length;i++){

      cards[i].show = false;

    }

    this.viewCtrl.dismiss();
    
  }

  clickDeleteCards(){
  
    this.setPage.delete = !this.setPage.delete;
    this.viewCtrl.dismiss();

  }

  clickDeleteSet(){

    const alert = this.alertCtrl.create({
      title: 'Confirm',
      subTitle: 'Are you sure you want to delete this entire set?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Delete',
          handler: data => {

            this.db.getCards(this.email, this.setId)
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {      
                this.db.deleteCard(this.email,this.setId,doc.id);
              });

              this.db.deleteSet(this.email, this.setId);

              this.listPage.loadSets();

              this.viewCtrl.dismiss();
              this.navParams.get('setPage').navCtrl.pop();

            })

          }
        }
      ]
    });
    alert.present();

  }

}