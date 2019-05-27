import { Component, OnInit } from '@angular/core';

import { ClipsService } from '../services/clips.service';
import { Clip } from '../models/clip.model';

@Component({
  templateUrl: './clips.page.html',
  styleUrls: ['./clips.page.scss']
})
export class ClipsPage implements OnInit {
  loadedClips: Clip[];

  constructor(private clipsService: ClipsService) {}

  ngOnInit() {
    this.loadedClips = this.clipsService.clips;
  }
}
