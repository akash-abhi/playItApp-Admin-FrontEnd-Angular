import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginDetails ={
    email:"",
    password:"",
  }

  constructor(private _adminService:AdminService,private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._adminService.loginAdmin(this.loginDetails).subscribe(
      (data)=>{
        alert("success");
        this._router.navigate(['/dashboard']);
      },
      (error)=>{
        alert("something went wrong...")
      }
    )
  }

}
