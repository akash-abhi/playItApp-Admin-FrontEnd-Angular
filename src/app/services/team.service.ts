import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teamAddSubject = new Subject<boolean>();

  private baseUrl= "http://localhost:8080/playIt/api/v1/admin/team";
  constructor(private _http:HttpClient) { }

  
  //create team
  public createTeam(team:any){
    return this._http.post(`${this.baseUrl}/`,team);
  }
  
  //to get all the teams 
  public getAllTeams(){
    return this._http.get(`${this.baseUrl}/`);
  }

  //delete team 
  public deleteTeam(id:any){
    return this._http.delete(`${this.baseUrl}/${id}`);
  }

  //get Team By Id
  public getTeamById(id:any){
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  //update team
  public updateTeam(team:any){
    return this._http.put(`${this.baseUrl}/`,team);
  }
}
