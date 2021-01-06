import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3333/api/';
  constructor( private http: HttpClient,) { }


   public fetchUsers(): Observable<any> {

     return this.http.get(`${this.baseUrl}`+'users',);
 }

 public fetchMessageByUserId(userId: String): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'messages/'+userId,);
}

}
