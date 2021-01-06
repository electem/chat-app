import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: any;
	
  constructor(private http: HttpClient, @Inject(DOCUMENT) private document) {
    this.baseUrl = this.document.location.protocol + '//' + this.document.location.hostname + ':'+ environment.port;
  }

  public fetchUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/api/users');
  }

  public fetchMessageByUserId(userId: String): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/api/messages/' + userId);
  }

  public sendMessage(messageBody) {
    return this.http.post(`${this.baseUrl}` + '/api/sendMessage', messageBody);
  }
}
