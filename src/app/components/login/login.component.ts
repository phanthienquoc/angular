import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  recaptcha_verify_key: string | undefined;

  constructor(private loginService: LoginService) {
    this.recaptcha_verify_key = undefined;
  }

  public send(form: NgForm): void {
    console.log(form.form.value);
    console.log(`Token [${this.recaptcha_verify_key}] generated`);

    if (form.valid) {
      console.log(form.form.value);
      this.loginService.login({
        ...form.form.value,
        recaptcha_verify_key: form.form.value.recaptcha,
      });
    }
  }
}
