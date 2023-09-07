import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcontestComponent } from 'src/app/dialogs/addcontest/addcontest.component';
import { UpdateContestComponent } from 'src/app/dialogs/update-contest/update-contest.component';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {


  contests:any;

  constructor(private _contextService:ContextService,private _dialog:MatDialog) { }

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata(){
    this._contextService.getAll().subscribe(
      (data)=>{
        this.contests=data;
        console.log(data)},
      (error)=>{console.log(error)}
    )
  }

  updateContest(id:any){
    this._dialog.open(UpdateContestComponent,{
      data: id,
      height:'400px'
   });
  }


  openDialog(){
    this._dialog.open(AddcontestComponent,{
      width:'600px',
      height:'400px'
    });
  }

  delete(id:any){
    this._contextService.delete(id).subscribe(
      (data)=>{
        this.contests=this.contests.filter((c: { id: any; })=>  c.id!=id);
        console.log(data);
      },
      (error)=>{console.log(error)}
    )
  }

}
