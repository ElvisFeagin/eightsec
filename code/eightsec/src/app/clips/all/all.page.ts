import { Component, OnInit } from '@angular/core';

import { ClipsService } from 'src/app/services/clips.service';
import { Clip } from 'src/app/models/clip.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  loadedClips: Clip[] = [];

  constructor(private clipsService: ClipsService) { }

  ngOnInit() {
    this.loadedClips = this.clipsService.clips;
  }

}
