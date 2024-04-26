import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private client:HttpClient) { }

  getAllRooms():Observable<any>{
    return this.client.get("http://localhost:8080/allrooms")
  }

  getRoomByRoomNumber(roomNumber:any){
    return this.client.get("http://localhost:8080/room/"+roomNumber);
  }

  addRoom(data:any):Observable<any>{
    return this.client.post("http://localhost:8080/addroom",data);
  }

  deleteRoom(roomId:any):Observable<any>{
    return this.client.delete("http://localhost:8080/deleteroom/"+roomId)
  }

  updateRoom(data:any):Observable<any>{
    return this.client.put("http://localhost:8080/updateroom",data);
  }

}
