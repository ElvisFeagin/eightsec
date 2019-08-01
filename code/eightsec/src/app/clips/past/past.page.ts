import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Clip } from '../../models/clip.model';
import { PastService } from '../../services/past.service';

@Component({
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss']
})
export class PastPage implements OnInit {
  loadedPastClips: Clip[];

  constructor(
    private pastService: PastService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadedPastClips = this.pastService.pastClips;
  }

  onViewClip() {
    this.navCtrl.navigateBack('/tabs/clips/top');
  }
}
