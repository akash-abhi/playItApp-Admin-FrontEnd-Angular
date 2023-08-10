import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddteamComponent } from 'src/app/dialogs/addteam/addteam.component';
import { UpdateTeamComponent } from 'src/app/dialogs/update-team/update-team.component';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams:any;
  
  // imgurl="../../../assets/IndiaLogo.png";
  constructor(private _teamService:TeamService, private _dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  
  }

  updateTeam(id:any){
    this._dialog.open(UpdateTeamComponent,{
      data: id
   });
  }


  loadData(){
    this._teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams = data;
        console.log(this.teams)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  openDialog(){
    this._dialog.open(AddteamComponent);
  }


  deleteTeam(id:any){
    this._teamService.deleteTeam(id).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}

