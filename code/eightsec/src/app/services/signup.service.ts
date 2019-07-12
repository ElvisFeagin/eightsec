import { Injectable } from '@angular/core';

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
export class SignupService {}
