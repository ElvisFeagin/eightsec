import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  templateUrl: './heat.page.html',
  styleUrls: ['./heat.page.scss']
})
export class HeatPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onViewClip() {
    this.navCtrl.navigateBack('/tabs/clips/top');
  }
}
