import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Base64 } from 'js-base64';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: any;
  auth = Base64.encode("API_USER:pwd12#");

  authHeader = new HttpHeaders().set(
    "Authorization",
    'Basic ' + this.auth
  );

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document) {
    this.baseUrl = this.document.location.protocol + '//' + this.document.location.hostname + ':3333';
  }

  public fetchUsers(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/users', {
      headers: this.authHeader
    });
  }

  public fetchMessageByUserId(userId: String): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/messages/' + userId, {
      headers: this.authHeader
    });
  }

  public sendMessage(messageBody) {

    return this.http.post(`${this.baseUrl}` + '/api/sendMessage', messageBody, {
      headers: this.authHeader
    });
  }
}
