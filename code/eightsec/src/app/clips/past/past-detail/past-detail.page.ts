import { Component, OnInit } from '@angular/core';
import { ClipsService } from '../../../services/clips.service';

@Component({
  selector: 'app-past-detail',
  templateUrl: './past-detail.page.html',
  styleUrls: ['./past-detail.page.scss'],
})
export class PastDetailPage implements OnInit {

  constructor(private clipsService: ClipsService) { }

  ngOnInit() {
  }

}
