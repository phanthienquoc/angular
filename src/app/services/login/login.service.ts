import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpService) {}

  login(params: any): void {
    this.http.post(`/user_profile/login`, params).subscribe((data) => {
      console.log('LoginService', data);
    });
  }
}
