import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  public loginAdmin(admin:any){
    return this._http.post(`${baseUrl}/login`,admin);
  }
}
