import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl= "http://localhost:8080/playIt/api/v1/admin/player";
  constructor(private _http:HttpClient) { }

  
  //create team
  public createPlayer(player:any){
    return this._http.post(`${this.baseUrl}/`,player);
  }
  
  //to get all the teams 
  public getAllPlayers(){
    return this._http.get(`${this.baseUrl}/`);
  }

  //delete player
  public deletePlayer(id:any){
    return this._http.delete(`${this.baseUrl}/${id}`);
  }

  //get player by id
  public getPlayerById(id:any){
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  //update player
  public updatePlayer(player:any){
    return this._http.put(`${this.baseUrl}/`,player);
  }
}
