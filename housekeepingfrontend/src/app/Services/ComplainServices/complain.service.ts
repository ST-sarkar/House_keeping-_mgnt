import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  constructor(private client:HttpClient) { }

  getAllComplaints():Observable<any>{
      return this.client.get("http://localhost:8080/allComplaints")
  }

  addNewComplain(data:any):Observable<any>{
    return this.client.post("http://localhost:8080/addcomplain",data);
  }

  deleteComplain(serviceId:any):Observable<any>{
    return this.client.delete("http://localhost:8080/delete/complain/"+serviceId);
  }
}
