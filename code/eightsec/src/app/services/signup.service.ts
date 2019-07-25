// https://blog.angularindepth.com/how-the-angular-fire-library-makes-firebase-feel-like-magic-1fda375966bb
// https://github.com/andrewevans0102/grocery-list

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  signUpUser(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  updateUserProfile() {}
}
