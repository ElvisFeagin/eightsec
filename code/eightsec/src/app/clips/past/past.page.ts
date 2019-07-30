import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss']
})
export class PastPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onViewClip() {
    this.navCtrl.navigateBack('/tabs/clips/top');
  }
}
