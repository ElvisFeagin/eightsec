import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UploadService, UploadedClip } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss']
})
export class UploadPage implements OnInit {
  form: FormGroup;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {
    this.form = new FormGroup({
      nickname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      caption: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(80)]
      })
    });
  }

  onClipUpload() {
    if (!this.form.valid) {
      return;
    }
    const clip: UploadedClip = {
      uploadDate: new Date(),
      weekDate: new Date(),
      weekNumber: 0,
      nickname: this.form.value.nickname as string,
      caption: this.form.value.caption as string,
      imageUrl: '',
      isHeat: false,
      votes: 0
    };
    this.uploadService.addClip(clip);
  }
}
