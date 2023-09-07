import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddplayerComponent } from 'src/app/dialogs/addplayer/addplayer.component';
import { UpdatePlayerComponent } from 'src/app/dialogs/update-player/update-player.component';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;

  constructor(private _playerService:PlayerService,private _dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  updatePlayer(id:any){
    this._dialog.open(UpdatePlayerComponent,{
      data: id
   });
  }


  loadData(){
    this._playerService.getAllPlayers().subscribe(
      (data)=>{
        this.players = data;
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  openDialog(){
    this._dialog.open(AddplayerComponent);
  }

  deletePlayer(id:any){
    
    this._playerService.deletePlayer(id).subscribe(
      (data)=>{
        this.players=this.players.filter((p: { id: any; })=>  p.id!=id);
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
