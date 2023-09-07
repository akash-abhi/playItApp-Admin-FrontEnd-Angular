import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-update-contest',
  templateUrl: './update-contest.component.html',
  styleUrls: ['./update-contest.component.css']
})
export class UpdateContestComponent implements OnInit {

  c:any;

  constructor(private _contextService:ContextService,@Inject(MAT_DIALOG_DATA) public id:any) { }

  ngOnInit(): void {
    this._contextService.getById(this.id).subscribe(
      (data)=>{this.c=data},
      (error)=>{console.log(error)}
    )
  }

  update(){
    this._contextService.update(this.c).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error)}
    )
  }

}
