import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddteamComponent } from 'src/app/dialogs/addteam/addteam.component';
import { UpdateTeamComponent } from 'src/app/dialogs/update-team/update-team.component';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams:any;
  
  constructor(private _teamService:TeamService, private _dialog:MatDialog,private _playerService:PlayerService) { }

  ngOnInit(): void {
    this.loadData();

    this._teamService.teamAddSubject.asObservable().subscribe(
      (response)=>{
        this.loadData();
      }
    )
  
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

  public selectedTeam:any;
  loadTeam(id:any){
    this._teamService.getTeamById(id).subscribe(
      (data)=>{
       
        this.selectedTeam=data;
      
        this._playerService.deleteAllPlayerByTeamname(this.selectedTeam.teamname).subscribe(
      (data)=>{
        console.log("all player deleted with this teamname")
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
      },
      (error)=>{
        console.log(error);
      },
      ()=>{this.selectedTeam = true}
    )
  }

  deleteTeam(id:any){
    

    this.loadTeam(id);
    
    

    this._teamService.deleteTeam(id).subscribe(
      (data)=>{
        this.teams = this.teams.filter((t:{id:any;})=>t.id!=id);
        console.log(data);
        console.log("team deleted successfully")
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  
}

