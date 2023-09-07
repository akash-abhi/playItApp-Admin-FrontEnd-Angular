import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  
  teamForm = new FormGroup({
    teamname:new FormControl('',[Validators.required]),
    teamlogourl:new FormControl('',[Validators.required])
  });

  constructor(private _teamService:TeamService) { }

 get teamname(){
  return this.teamForm.get('teamname');
 }

 get teamlogourl(){
  return this.teamForm.get('teamlogourl');
 }

  addTeam(){
 
   
    this._teamService.createTeam(this.team).subscribe(
      (data)=>{
        console.log(data)
        this._teamService.teamAddSubject.next(true);
        alert("success");
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
