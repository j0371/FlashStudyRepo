import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { SetPopOverPage } from '../set-pop-over/set-pop-over';
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { DatabaseProvider } from '../../providers/database/database'
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  email: string;
  setId: string;
  delete: boolean = false;
  setName: string;

cards: Array<{cardId: string, front: string, back: string, fImg: string, bImg: string, show: boolean}>

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,public popoverCtrl: PopoverController,
              private auth: AuthenticationProvider, private db: DatabaseProvider,
              public viewCtrl: ViewController) {

                this.email = auth.getUser().email;
                this.setId = navParams.get('setId');

                this.db.getSetName(this.email, this.setId)
                .then(doc =>{
                  this.setName = doc.name;
                })

                this.loadCards();
  }

  loadCards(){

    this.cards =[];

    this.db.getCards(this.email, this.setId)
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {

        this.cards.push({
          cardId: doc.id,
          front: doc.data().front,
          back: doc.data().back,
          fImg: doc.data().frontImg,
          bImg: doc.data().frontImg,
          show: false
        });

      });

    });

  }

  clickCard(card) {
    card.show = !card.show;
  }

  goBack(){
    this.navCtrl.pop();
  }

  goToPopOver(){
    const popover = this.popoverCtrl.create(SetPopOverPage, { setId: this.setId,setPage: this, listPage: this.navParams.get('listPage') });
    popover.present();
  }

  clickDelete(card){
    this.db.deleteCard(this.email, this.setId, card.cardId);
    this.loadCards();
  }

  getSetName(){
    return this.setName;
  }

}