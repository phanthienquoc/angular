import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    http.options(httpOptions);
  }

  get(url: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/${url}`);
  }

  post(url: string, params: any): Observable<any> {
    return this.http.post(`${environment.apiURL}${url}`, params);
  }

  put(url: string, params: any): Observable<any> {
    return this.http.put(`${environment.apiURL}${url}`, params);
  }

  delete(url: string, params: any): Observable<any> {
    return this.http.delete(`${environment.apiURL}${url}`, params);
  }
}
