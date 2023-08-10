import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent {

  imgurl:any;

  public team={
    "teamname":'',
    "teamlogourl":''
  };
  
  

  constructor(private _teamService:TeamService) { }

 


  addTeam(){
   
    this._teamService.createTeam(this.team).subscribe(
      (data)=>{
        console.log(data)
        alert("success");
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
