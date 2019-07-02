import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TopClip {
  id?: string;
  caption: string;
  imageUrl: string;
  isHeat: boolean;
  nickname: string;
  uploadDate: Date;
  votes: number;
  weekDate: Date;
  weekNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class TopClipsService {
  private topClips: Observable<TopClip[]>;
  private clipCollection: AngularFirestoreCollection<TopClip>;

  constructor(private db: AngularFirestore) {
    this.clipCollection = this.db.collection<TopClip>('top-clips');
    this.topClips = this.clipCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTopClips(): Observable<TopClip[]> {
    return this.topClips;
  }

  // private _clips: Clip[] = [
  //   {
  //     id: 'c3',
  //     uploadDate: new Date(2025, 6, 27),
  //     weekDate: new Date(2025, 6, 27),
  //     weekNumber: 1,
  //     nickname: 'MrSkeleton',
  //     caption:
  //       'But, like most politicians, he promised more than he could deliver. I can',
  //     imageUrl: 'https://free-images.com/lg/7c29/cat_pet_mirror_697113.jpg',
  //     isHeat: false,
  //     votes: 23
  //   },
  //   new Clip(
  //     'c2',
  //     new Date(2025, 6, 20),
  //     new Date(2025, 6, 20),
  //     1,
  //     'Filet Minyon',
  //     'Please, Don-Bot... look into your hard drive, and open your mercy file!',
  //     'https://free-images.com/lg/3427/clown_claw_circus_tihany.jpg',
  //     false,
  //     10
  //   ),
  //   new Clip(
  //     'c1',
  //     new Date(2025, 6, 13),
  //     new Date(2025, 6, 13),
  //     1,
  //     'P. Ennis',
  //     'I was having the most wonderful dream. Except you were there',
  //     'https://free-images.com/lg/ea39/boys_funny_faces_expressions.jpg',
  //     false,
  //     3
  //   )
  // ];
}
