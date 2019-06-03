import { Component, OnInit } from '@angular/core';

import { Clip } from 'src/app/models/clip.model';
import { ClipsService } from 'src/app/services/clips.service';

@Component({
  templateUrl: './heat.page.html',
  styleUrls: ['./heat.page.scss']
})
export class HeatPage implements OnInit {
  loadedClips: Clip[] = [];

  constructor(private clipsService: ClipsService) {}

  ngOnInit() {
    this.loadedClips = this.clipsService.clips;
  }
}
