import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private client:HttpClient) { }

  getAllservices():Observable<any>{
    return this.client.get("http://localhost:8080/allservice")
  }

  getAllUsersservice(userId:any):Observable<any>{
    return this.client.get("http://localhost:8080/service/user/all/"+userId)
  }

  getserviceByserviceNumber(serviceNumber:any){
    return this.client.get("http://localhost:8080/service/"+serviceNumber);
  }

  addservice(data:any):Observable<any>{
    return this.client.post("http://localhost:8080/addservice",data);
  }

  deleteservice(serviceId:any):Observable<any>{
    return this.client.delete("http://localhost:8080/deleteservice/"+serviceId)
  }


  updateservice(data:any):Observable<any>{
    return this.client.put("http://localhost:8080/updateservice",data);
  }
}
