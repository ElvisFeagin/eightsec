import { Component, OnInit } from '@angular/core';

import { TopClipsService, TopClip } from '../../services/top-clips.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss']
})
export class TopPage implements OnInit {
  topClips: Observable<TopClip[]>;

  constructor(private topClipsService: TopClipsService) {}

  ngOnInit() {
    this.topClips = this.topClipsService.getTopClips().pipe(
      map(data => {
        data.forEach(d => {
          // Some ugly type assertions in TypeScript to satisfy VSCode syntax checking
          d.weekDate = ((d.weekDate as unknown) as firebase.firestore.Timestamp).toDate();
          d.uploadDate = ((d.uploadDate as unknown) as firebase.firestore.Timestamp).toDate();
        });
        // Sort the top clips in descending week number
        data.sort((a, b) => {
          const week1 = a.weekNumber;
          const week2 = b.weekNumber;
          return week1 < week2 ? 1 : -1;
        });
        return data;
      })
    );
  }
}
