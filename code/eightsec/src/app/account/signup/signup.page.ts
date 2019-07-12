import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { SignupService } from '../../services/signup.service';
import { CustomValidators } from './custom-validators';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  // Alpha numeric, min. 8 chars, max. 30 chars, at least 1 number, at least 1 special character.
  private passwordRegex = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$/;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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

  onSignup() {}
}
