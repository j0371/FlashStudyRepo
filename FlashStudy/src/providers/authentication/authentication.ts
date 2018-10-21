import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase, { auth } from 'firebase';

@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');

    firebase.auth.Auth.Persistence.LOCAL;

  }

    register(email, password): Promise<any> {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email, password): Promise<any> {
      return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
      return firebase.auth().signOut();
  }

  
  getUser() {
    return firebase.auth().currentUser;
  }

  resetPassword(email: string){
    return firebase.auth().sendPasswordResetEmail(email);
  }

}
