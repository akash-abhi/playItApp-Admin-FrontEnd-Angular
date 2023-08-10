import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  
  public player={
    "playerName":'',
    "teamName":'',
    "skills":'',
    "playerPoints":''

  };

  public p:any;
  
  public teams:any;

  loadPlayerCompleted:boolean = false;
  loadTeamCompleted:boolean = false;

  constructor(private _playerService:PlayerService,private _teamService:TeamService,
    @Inject(MAT_DIALOG_DATA) public id: any ) { }

  ngOnInit(): void {
    this.loadTeam();
    this.loadPlayerDetails();
    
    
  }

  loadPlayerDetails(){

    this._playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        this.p = data;
        console.log(this.p)
      },
      (error)=>{
        console.log(error);
      },
      ()=>{this.loadPlayerCompleted = true}
    )
  }

  loadTeam(){
    this._teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams = data;
        console.log(this.teams)
      },
      (error)=>{
        console.log(error);
      },
      ()=>{this.loadTeamCompleted = true}
    )
  }



  updatePlayer(){
   this.teams.teamname = this.player.teamName;
    this._playerService.updatePlayer(this.p).subscribe(
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
