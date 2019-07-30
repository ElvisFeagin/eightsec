import { Injectable } from '@angular/core';

export interface TopClip {
  id: string;
  caption: string;
  imageUrl: string;
  isHeat: boolean;
  nickname: string;
  uploadDate: Date;
  votes: number;
  weekDate: Date;
  weekNumber: number;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopService {
  private _topClips: TopClip[] = [
    {
      id: 'cl1',
      caption:
        'But, like most politicians, he promised more than he could deliver. I can',
      imageUrl: 'https://free-images.com/lg/7c29/cat_pet_mirror_697113.jpg',
      isHeat: true,
      nickname: 'MrSkeleton',
      uploadDate: new Date('Jul 24, 2025'),
      votes: 23,
      weekDate: new Date('Jul 27, 2025'),
      weekNumber: 4,
      userId: 'u1'
    },
    {
      id: 'cl2',
      caption:
        'I was having the most wonderful dream. Except you were there',
      imageUrl: 'https://free-images.com/lg/ea39/boys_funny_faces_expressions.jpg',
      isHeat: false,
      nickname: 'P. Ennis',
      uploadDate: new Date('Jul 7, 2025'),
      votes: 3,
      weekDate: new Date('Jul 13, 2025'),
      weekNumber: 3,
      userId: 'u3'
    },
    {
      id: 'cl3',
      caption:
        'Please, Don-Bot… look into your hard drive, and open your mercy file!',
      imageUrl: 'https://free-images.com/lg/3427/clown_claw_circus_tihany.jpg',
      isHeat: false,
      nickname: 'Filet Minyon',
      uploadDate: new Date('Jul 15, 2025'),
      votes: 10,
      weekDate: new Date('Jul 20, 2025'),
      weekNumber: 2,
      userId: 'u2'
    }
  ];

  get topClips() {
    return [...this._topClips];
  }

  constructor() {}
}
