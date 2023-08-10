import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

 

  public player={
    "playerName":'',
    "teamName":'',
    "skills":'',
    "playerPoints":''

  };
  
  
  public teams:any;
  

  constructor(private _playerService:PlayerService,private _teamService:TeamService) { }

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam(){
    this._teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }



  addPlayer(){
   
    this._playerService.createPlayer(this.player).subscribe(
      (data)=>{
        console.log(this.player);
        console.log(data)
        alert("success");
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
