import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

    register(email, password): Promise<any> {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email, password): Promise<any> {
      return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  loginAsGuest(): Promise<any> {
      return firebase.auth().signInAnonymously();
  }

  logout(): Promise<any> {
      return firebase.auth().signOut();
  }

  getUser() {
    return firebase.auth().currentUser;
  }

}
