import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchfixtureService } from 'src/app/services/matchfixture.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addmatchfixture',
  templateUrl: './addmatchfixture.component.html',
  styleUrls: ['./addmatchfixture.component.css']
})
export class AddmatchfixtureComponent implements OnInit {

  
  stageList: string[] = ['League', 'Quarter finals', 'Semi-Final', 'Final'];
  public player={
    "team1name":'',
    "team2name":'',
    "matchdatetime":'',
    "stage":'',
    "venue":''

  };
  
  matchFixtureForm=new FormGroup({
    team1name:new FormControl('',[Validators.required]),
    team2name:new FormControl('',[Validators.required]),
    matchdatetime:new FormControl('',[Validators.required]),
    venue:new FormControl('',[Validators.required]),
    stage:new FormControl('',[Validators.required])
  })
  
  public teams:any;
  
  get team1name(){
    return this.matchFixtureForm.get('team1name')
  }

  get team2name(){
    return this.matchFixtureForm.get('team2name');
  }

  get matchdatetime(){
    return this.matchFixtureForm.get('matchdatetime');
  }

  get venue(){
    return this.matchFixtureForm.get('venue');
  }

  get stage(){
    return this.matchFixtureForm.get('stage');
  }

  constructor(private _matchFixtureService:MatchfixtureService,private _teamService:TeamService) { }

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



  add(){
    console.log(this.matchFixtureForm.value);
    this._matchFixtureService.create(this.matchFixtureForm.value).subscribe(
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
