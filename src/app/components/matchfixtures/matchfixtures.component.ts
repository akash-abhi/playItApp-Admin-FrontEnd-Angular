import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmatchfixtureComponent } from 'src/app/dialogs/addmatchfixture/addmatchfixture.component';
import { UpdateMatchfixturesComponent } from 'src/app/dialogs/update-matchfixtures/update-matchfixtures.component';

import { UpdatePlayerComponent } from 'src/app/dialogs/update-player/update-player.component';
import { MatchfixtureService } from 'src/app/services/matchfixture.service';


@Component({
  selector: 'app-matchfixtures',
  templateUrl: './matchfixtures.component.html',
  styleUrls: ['./matchfixtures.component.css']
})
export class MatchfixturesComponent implements OnInit {

  players:any;
  matchfixtures:any;

  constructor(private _matchFixtureService:MatchfixtureService,private _dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  updatePlayer(id:any){
    this._dialog.open(UpdateMatchfixturesComponent,{
      data: id
   });
  }


  loadData(){
    this._matchFixtureService.getAll().subscribe(
      (data)=>{
        this.matchfixtures = data;
      
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  openDialog(){
    this._dialog.open(AddmatchfixtureComponent);
  }

  delete(id:any){
      this._matchFixtureService.delete(id).subscribe(
        (data)=>{
          this.matchfixtures=this.matchfixtures.filter((mf:{id:any;})=>mf.id!=id);
          console.log(data)},
        (error)=>{console.log(error)}
      )
  }

}
