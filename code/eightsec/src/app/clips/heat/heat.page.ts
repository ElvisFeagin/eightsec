import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './heat.page.html',
  styleUrls: ['./heat.page.scss']
})
export class HeatPage implements OnInit {
  constructor() {
    console.log('IN HeatPage -> constructor');
  }

  ngOnInit() {}
}
