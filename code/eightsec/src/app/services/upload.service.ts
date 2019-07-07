import { Injectable } from '@angular/core';
import {
  DocumentReference,
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';

export interface UploadedClip {
  id?: string;
  uploadDate: Date;
  weekDate: Date;
  weekNumber: number;
  nickname: string;
  caption: string;
  imageUrl: string;
  isHeat: boolean;
  votes: number;
  userId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private uploadedClipCollection: AngularFirestoreCollection<UploadedClip>;

  constructor(private db: AngularFirestore) {
    this.uploadedClipCollection = this.db.collection<UploadedClip>(
      'uploaded-clips'
    );
  }

  addClip(uploadedClip: UploadedClip): Promise<DocumentReference> {
    return this.uploadedClipCollection.add(uploadedClip);
  }
}
