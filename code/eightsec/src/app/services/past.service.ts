import { Injectable } from '@angular/core';

import { Clip } from '../models/clip.model';

@Injectable({
  providedIn: 'root'
})
export class PastService {
  private _pastClips: Clip[] = [
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
    },
    {
      id: 'cl4',
      caption: 'Oh yeah, good luck with that.',
      imageUrl: 'https://free-images.com/lg/7dc0/man_person_hungry_eating.jpg',
      isHeat: false,
      nickname: 'Beezow-Doo-Doo-Zopittybop-Bop-Bop',
      uploadDate: new Date('Jul 14, 2025'),
      votes: 10,
      weekDate: new Date('Jul 20, 2025'),
      weekNumber: 3,
      userId: 'u4'
    },
    {
      id: 'cl3',
      caption: 'Oh dear! She\'s stuck in an infinite loop, and he\'s an idiot!',
      imageUrl:
        'https://free-images.com/lg/e4bc/caricature_goat_black_comic.jpg',
      isHeat: false,
      nickname: 'P. Ennis',
      uploadDate: new Date('Jul 16, 2025'),
      votes: 3,
      weekDate: new Date('Jul 20, 2025'),
      weekNumber: 2,
      userId: 'u3'
    }
  ];

  get pastClips() {
    return [...this._pastClips];
  }

  constructor() {}
}
