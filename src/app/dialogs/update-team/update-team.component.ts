import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  imgurl:any;

  // public team={
  //   "teamname":'',
  //   "teamlogourl":''
  // };
  
  team:any;
  loadCompleted:boolean = false;
  

  constructor(private _teamService:TeamService,@Inject(MAT_DIALOG_DATA) public id: any ) { 
  }
  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam(){
    this._teamService.getTeamById(this.id).subscribe(
      (data)=>{
        console.log(data);
        this.team=data;
      },
      (error)=>{
        console.log(error);
      },
      ()=>{this.loadCompleted = true}
    )
  }


  updateTeam(){
   
    this._teamService.updateTeam(this.team).subscribe(
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
