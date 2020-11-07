import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retailer } from "./retailer";
import { Observable } from 'rxjs';
import { Status } from "./status";


@Injectable({
  providedIn: 'root'
})
export class RetailerRegisterService {

  constructor(private http:HttpClient) { }

  public register(retailer:Retailer) :Observable<Status>{
    let url="http://localhost:9090/update-retailer";
    return this.http.post<Status>(url, retailer);
  }
}
