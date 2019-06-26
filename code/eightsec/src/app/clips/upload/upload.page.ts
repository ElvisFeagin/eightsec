import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss']
})
export class UploadPage implements OnInit {
  form: FormGroup;

  constructor() {}

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
    console.log(this.form);
  }
}
