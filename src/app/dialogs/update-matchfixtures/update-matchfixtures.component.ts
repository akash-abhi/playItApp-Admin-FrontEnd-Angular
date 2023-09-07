import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatchfixtureService } from 'src/app/services/matchfixture.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-update-matchfixtures',
  templateUrl: './update-matchfixtures.component.html',
  styleUrls: ['./update-matchfixtures.component.css']
})
export class UpdateMatchfixturesComponent implements OnInit {

 
  stageList: string[] = ['League', 'Quarter finals', 'Semi-Final', 'Final'];
  public player={
    "team1name":'',
    "team2name":'',
    "matchdatetime":'',
    "stage":'',
    "venue":''

  };

  matchfixture:any;
  
  
  public teams:any;
  
  constructor(private _matchFixtureService:MatchfixtureService,private _teamService:TeamService,@Inject(MAT_DIALOG_DATA) public id: any) { }

  ngOnInit(): void {
    this.loadTeam();
    this.loadMatchFixture();
    
  }

  loadMatchFixture(){
    this._matchFixtureService.getById(this.id).subscribe(
      (data)=>{
        this.matchfixture = data;
        
      },
      (error)=>{
        console.log(error)
      }
    )
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

  update(){
    this._matchFixtureService.update(this.matchfixture).subscribe(
      (data)=>{console.log(data)
      alert("updated successfully...")},
      (error)=>{console.log(error)}
    )
  }

 

}
