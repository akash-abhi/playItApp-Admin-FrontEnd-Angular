import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchfixtureService {

  private baseUrl= "http://localhost:8080/playIt/api/v1/matchFixtures";
  
  constructor(private _http:HttpClient) { }

  
  //create team
  public create(matchFixtures:any){
    return this._http.post(`${this.baseUrl}/`,matchFixtures);
  }

  //get all
  public getAll(){
    return this._http.get(`${this.baseUrl}/`);
  }

  //delete 
  public delete(id:any){
    return this._http.delete(`${this.baseUrl}/${id}`)
  }

  //update
  public update(matchfixture:any){
    return this._http.put(`${this.baseUrl}/`,matchfixture);
  }
  
  //get by id
  public getById(id:any){
    return this._http.get(`${this.baseUrl}/${id}`);
  }
}
