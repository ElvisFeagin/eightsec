// Validation inspiration:
// https://codinglatte.com/posts/angular/cool-password-validation-angular/

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

import { SignupService } from '../../services/signup.service';
import { CustomValidators } from './custom-validators';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private signupService: SignupService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        email: [
          null,
          Validators.compose([Validators.required, Validators.email])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            CustomValidators.patternValidator(/\d/, { hasNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            CustomValidators.patternValidator(/[a-z]/, { hasLowerCase: true }),
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              { hasSpecialCharacters: true }
            )
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])],
        screenName: [
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(15),
            CustomValidators.patternValidator(/^[a-zA-Z0-9_]*$/, {
              hasNoSpecialCharacters: true
            })
          ])
        ]
      },
      {
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  onUserSignup(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Signing up...' })
      .then(loadingEl => {
        loadingEl.present();
        this.signupService.signUpUser(email, password).subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/tabs/clips/listing/select');
          },
          error => {
            loadingEl.dismiss();
            const errorCode: string = error.code;
            const errorMessage: string = error.message;
            if (errorCode === 'auth/email-already-in-use') {
              this.showAlert('This email address already exists!');
            } else {
              this.showAlert(errorMessage);
            }
          }
        );
      });
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
}
