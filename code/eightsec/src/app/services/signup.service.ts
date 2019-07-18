// https://github.com/andrewevans0102/grocery-list

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

export interface SignedUpUser {
  userId?: string;
  signedUpDate: Date;
  email: string;
  nickname: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private afAuth: AngularFireAuth) {}

  // createUser(email: string, password: string) {
  //   return from(
  //     new Promise<any>((resolve, reject) => {
  //       this.afAuth.auth
  //         .createUserWithEmailAndPassword(email, password)
  //         .then(res => resolve(res), err => reject(err));
  //     })
  //   );
  // }

  signUpUser(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }
}
