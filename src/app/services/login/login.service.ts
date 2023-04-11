import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpService } from '../http/http.service';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private eventBus: Subject<any>;
  private guid: string = '';
  private user: any = {};

  constructor(
    private http: HttpService,
    private authService: AuthService,
    private router: Router
  ) {
    this.eventBus = new Subject<any>();
  }

  login(params: any): void {
    this.http.post(`/user_profile/login`, params).subscribe(
      (response) => {
        this.guid = response.data.guid;
        this.user = response.data.user_profile;
        this.router.navigate(['/login/verify-otp']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  /**
   *
   * @param params {"user_id":"763500874327701400","guid":"838443586876881565","otp":"abcxyz","invite_token":null}
   */
  verifyLogin(params: any): void {
    params = {
      guid: this.guid,
      user_id: this.user.user_id,
      otp: params.otp,
    };
    const authService = this.authService;
    const router = this.router;
    this.http.post(`/user_profile/verify_login`, params).subscribe({
      next(response) {
        console.log('LoginService', response);
        authService.setToken(response.data);
        router.navigate(['/dashboard']);
      },
      error(error) {
        console.error(error);
      },
    });
  }

  emit(event: any) {
    this.eventBus.next(event);
  }

  on(eventName: string): Observable<any> {
    return this.eventBus.asObservable().pipe(
      filter((event: any) => event.name === eventName),
      map((event: any) => event.value)
    );
  }
}
