import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent {
  constructor(private loginService: LoginService) {}
  public send(form: NgForm): void {
    if (form.valid) {
      this.loginService.verifyLogin({
        otp: form.form.value.otp,
      });
    }
  }
}
