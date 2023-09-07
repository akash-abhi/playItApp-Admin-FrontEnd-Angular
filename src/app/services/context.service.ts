import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {


 private baseUrl= "http://localhost:8080/playIt/api/vi/createContest";
  constructor(private _http:HttpClient) { }

  
  //create team
  public create(contest:any){
    return this._http.post(`${this.baseUrl}/`,contest);
  }

  //get all
  public getAll(){
    return this._http.get(`${this.baseUrl}/`);
  }

  //get by id
  public getById(id:any){
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  //delete
  public delete(id:any){
    return this._http.delete(`${this.baseUrl}/${id}`);
  }

  //update
  public update(contest:any){
    return this._http.put(`${this.baseUrl}/`,contest);
  }
}
