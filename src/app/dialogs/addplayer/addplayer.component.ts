import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import {FormGroup,FormControl, Validators} from '@angular/forms';
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
  
  playerForm=new FormGroup({
    playerName:new FormControl('',[Validators.required]),
    teamName:new FormControl('',[Validators.required]),
    skills:new FormControl('',[Validators.required]),
    playerPoints:new FormControl('',[Validators.required])
  })
  
  public teams:any;
  
  get playerName(){
    return this.playerForm.get('playerName')
  }

  get teamName(){
    return this.playerForm.get('teamName');
  }

  get skills(){
    return this.playerForm.get('skills');
  }

  get playerPoints(){
    return this.playerForm.get('playerPoints');
  }

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
