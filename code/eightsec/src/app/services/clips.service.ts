import { Injectable } from '@angular/core';

import { Clip } from '../models/clip.model';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  private _clips: Clip[] = [
    new Clip(
      'c3',
      new Date(2025, 6, 27),
      new Date(2025, 6, 27),
      1,
      'MrSkeleton',
      'But, like most politicians, he promised more than he could deliver. I can',
      'https://free-images.com/lg/7c29/cat_pet_mirror_697113.jpg',
      false,
      23
    ),
    new Clip(
      'c2',
      new Date(2025, 6, 20),
      new Date(2025, 6, 20),
      1,
      'Filet Minyon',
      'Please, Don-Bot... look into your hard drive, and open your mercy file!',
      'https://free-images.com/lg/3427/clown_claw_circus_tihany.jpg',
      false,
      10
    ),
    new Clip(
      'c1',
      new Date(2025, 6, 13),
      new Date(2025, 6, 13),
      1,
      'P. Ennis',
      'I was having the most wonderful dream. Except you were there',
      'https://free-images.com/lg/ea39/boys_funny_faces_expressions.jpg',
      false,
      3
    )
  ];

  get clips() {
    return [...this._clips];
  }

  constructor() {}
}
