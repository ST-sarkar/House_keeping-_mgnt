import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private client:HttpClient) { }

  getAlltasks():Observable<any>{
    return this.client.get("http://localhost:8080/alltask")
  }

  getAllUsersTask(userId:any):Observable<any>{
    return this.client.get("http://localhost:8080/task/user/all/"+userId)
  }

  gettaskBytaskNumber(taskNumber:any){
    return this.client.get("http://localhost:8080/task/"+taskNumber);
  }

  addtask(data:any):Observable<any>{
    return this.client.post("http://localhost:8080/addtask",data);
  }

  deletetask(taskId:any):Observable<any>{
    return this.client.delete("http://localhost:8080/deletetask/"+taskId)
  }


  updatetask(data:any):Observable<any>{
    return this.client.put("http://localhost:8080/updatetask",data);
  }
}
