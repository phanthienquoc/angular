import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private http: HttpService) {}

  public getToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  public setToken(params: any): void {
    localStorage.setItem('access_token', params.access_token);
    localStorage.setItem('refresh_token', params.refresh_token);
  }

  public isAuthenticated(): boolean {
    return this.getToken().length > 0;
  }

  public isLoggedIn(): boolean {
    return this.getToken().length > 0;
  }

  public logout(): void {
    localStorage.setItem('access_token', '');
    localStorage.setItem('refresh_token', '');
  }

  public collectFailedRequest(request: HttpRequest<any>): void {
    this.cachedRequests.push(request);
  }
  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
