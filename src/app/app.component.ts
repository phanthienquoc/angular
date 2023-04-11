import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogin: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) {
    this.isLogin = authService.isAuthenticated();
  }

  public loggedin() {
    return this.authService.isAuthenticated();
  }

  public loggout() {
    this.isLogin = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
