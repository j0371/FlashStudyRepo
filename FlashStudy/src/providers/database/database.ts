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
    return this.db.collection(email).doc(setId).getCollections();
  }

  addCard(email: string, setId: string, card: string, frontText: string, backText: string) {

    this.db.collection(email).doc(setId).collection(card).doc("content").add({
      front: frontText,
      back: backText
  })

  }

}