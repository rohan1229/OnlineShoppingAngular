import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable } from 'rxjs';
import { Status } from "./status";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user:User):Observable<Status>{
    let url = 'http://localhost:8080/register-user';
    return this.http.post<Status>(url,user);
  }
}
