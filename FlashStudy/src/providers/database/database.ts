import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase, { firestore } from 'firebase';

@Injectable()
export class DatabaseProvider {

  db: any;

  constructor(public http: HttpClient) {

    this.db = firebase.firestore();

  }

  getSets(email: string){
    return this.db.collection(email).get();
  }

  getCards(email: string, setId: string){
    return this.db.collection(email).doc(setId).collection("cards").get();
  }

  addCard(email: string, setId: string, frontText: string, backText: string) {

    this.db.collection(email).doc(setId).collection("cards").add({
      front: frontText,
      back: backText,
      frontImg: "",
      backImg: ""
    })

  }

  deleteCard(email: string, setId: string, cardId){
  this.db.collection(email).doc(setId).collection("cards").doc(cardId).delete();
  }

  changeSet(email: string, setId: string, name: string, icon: string){
    this.db.collection(email).doc(setId).update({
      name: name,
      icon: icon
    });

  }

  addSet(email: string, name: string, icon: string){

    this.db.collection(email).add({
      name: name,
      icon: icon
    });

  }

  deleteSet(email: string, setId: string){
    this.db.collection(email).doc(setId).delete();
  }

  getSetName(email: string, setId: string){
    return this.db.collection(email).doc(setId).get()
  }

}