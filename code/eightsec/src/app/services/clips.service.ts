import { Injectable } from '@angular/core';
import { Clip } from '../models/clip.model';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  private _clips: Clip[] = [
    new Clip(
      'c1',
      'But, like most politicians, he promised more than he could deliver. I can'
    ),
    new Clip(
      'c2',
      'Please, Don-Bot... look into your hard drive, and open your mercy file!'
    ),
    new Clip(
      'c3',
      'I was having the most wonderful dream. Except you were there'
    )
  ];

  get clips() {
    return [...this._clips];
  }

  constructor() {}
}
