import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  Login(Data:any):Observable<any>{
    return this.http.post("http://localhost:8080/user/login",Data);
  }
}
