import { Component, OnInit } from '@angular/core';

import { TopService } from '../../services/top.service';
import { Clip } from '../../models/clip.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss']
})
export class TopPage implements OnInit {
  loadedTopClips: Clip[];

  constructor(private topService: TopService) {}

  ngOnInit() {
    this.loadedTopClips = this.topService.topClips;
  }
}
