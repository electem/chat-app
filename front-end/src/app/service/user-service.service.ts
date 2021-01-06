import { Injectable , Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: any;
  constructor(private http: HttpClient, @Inject(DOCUMENT) private document) {
    this.baseUrl = 'http://localhost:3333/api/';
  }


  public fetchUsers(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + 'users',);
  }

  public fetchMessageByUserId(userId: String): Observable<any> {

    return this.http.get(`${this.baseUrl}` + 'messages/' + userId,);
  }
  sendMessage(messageBody) {
    return this.http.post(`${this.baseUrl}` + '/api/createMessage', messageBody);
  }
}
