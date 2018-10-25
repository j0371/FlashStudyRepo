import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';
import { Title } from '@angular/platform-browser';
import { AddSetPage } from '../add-set/add-set'
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AccountPopoverPage } from '../account-popover/account-popover'
import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { DatabaseProvider } from '../../providers/database/database'
import { PopoverController } from 'ionic-angular';
import { database } from 'firebase';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  email: string;
  sets: Array<{id: string, title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private auth: AuthenticationProvider,
              public popoverCtrl: PopoverController, private db: DatabaseProvider) {

                this.email = auth.getUser().email;
                this.loadSets();

  }

  goToPopOver(){
    const popover = this.popoverCtrl.create(AccountPopoverPage);
    popover.present();
  }

  loadSets(){

    this.sets = [];

    this.db.getSets(this.email)
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {

        this.sets.push({
          id: doc.id,
          title: doc.data().name,
          icon: doc.data().icon
        });

      });

      this.sets.push({
        id: 'add',
        title: 'Add Set ',
        icon: 'add'
      });

    });

  }

  select(set) {
    if(set.id == 'add'){
    this.navCtrl.push(AddSetPage, { listPage: this });
    }else {
      this.navCtrl.push(SetPage, { setId: set.id, listPage: this });
    }
  }

}
