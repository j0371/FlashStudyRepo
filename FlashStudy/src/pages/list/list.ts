import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';
import { Title } from '@angular/platform-browser';
import { AddSetPage } from '../add-set/add-set'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies

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

  itemTapped(item) {
    if(this.items[0] === item){
    this.navCtrl.push(SetPage);
    }else if(this.items[10] === item){
      this.navCtrl.push(AddSetPage);
    }
  }

  goBack(){
    this.navCtrl.pop();
  }

}
