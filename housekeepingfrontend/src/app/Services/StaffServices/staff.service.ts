import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private client:HttpClient) { }


  getAllstaffs():Observable<any>{
    return this.client.get("http://localhost:8080/alluser")
  }

  getstaffBystaffNumber(userId:any){
    return this.client.get("http://localhost:8080/userId/"+userId);
  }

  addstaff(data:any):Observable<any>{
    return this.client.post("http://localhost:8080/adduser",data);
  }

  deletestaff(userId:any):Observable<any>{
    return this.client.delete("http://localhost:8080/deleteuser/"+userId)
  }

  updatestaff(data:any):Observable<any>{
    return this.client.put("http://localhost:8080/updateuser",data);
  }
}
