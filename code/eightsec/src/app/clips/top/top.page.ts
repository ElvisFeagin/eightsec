import { Component, OnInit } from '@angular/core';

import { TopService, TopClip } from '../../services/top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss']
})
export class TopPage implements OnInit {
  loadedTopClips: TopClip[];

  constructor(private topService: TopService) {}

  ngOnInit() {
    this.loadedTopClips = this.topService.topClips;
  }
}
