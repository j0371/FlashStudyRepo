import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';
import { Title } from '@angular/platform-browser';
import { AddSetPage } from '../add-set/add-set'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
                this.initializeItems();
  }

  initializeItems(){
    this.items = [];
    for (let i = 1; i < 11; i++) {

      if(i === 1){
        this.items.push({
          title: 'Example Set',
          icon: 'flask'
        });
      }else{
        this.items.push({
          title: 'Set ' + i,
          icon: 'flask'
        });

        if(i === 10){
          this.items.push({
            title: 'Add Set ',
            icon: 'add'
          });
        }
      } 
    }
  }

  getItems(ev: any) {

    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'This will filter the set names',
      buttons: ['OK']
    });
    alert.present();

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incomplete',
      subTitle: 'Click the example set or add set',
      buttons: ['OK']
    });
    alert.present();
  }

  itemTapped(item) {
    if(this.items[0] === item){
    this.navCtrl.push(SetPage);
    }else if(this.items[10] === item){
      this.navCtrl.push(AddSetPage);
    }else{
      this.showAlert();
    }
  }

  goBack(){
    this.navCtrl.pop();
  }

}
