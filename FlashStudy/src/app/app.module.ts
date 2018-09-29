import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SetPage } from '../pages/set/set'
import { AddSetPage } from '../pages/add-set/add-set'
import { SetPopOverPage } from '../pages/set-pop-over/set-pop-over'
import {AddCardPage } from '../pages/add-card/add-card'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SetPage,
    AddSetPage,
    SetPopOverPage,
    AddCardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SetPage,
    AddSetPage,
    SetPopOverPage,
    AddCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
