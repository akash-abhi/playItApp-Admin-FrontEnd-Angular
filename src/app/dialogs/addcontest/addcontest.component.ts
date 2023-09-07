import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-addcontest',
  templateUrl: './addcontest.component.html',
  styleUrls: ['./addcontest.component.css']
})
export class AddcontestComponent implements OnInit {

  public contest={
    "contestname":'',
    "maxsize":'',
    "minsize":'',
    "prizemoney":'',
    "enteryfee":'',
    "rank1prize":'',
    "rank2prize":'',
    "rank3prize":''
  };

  contestForm=new FormGroup({
    contestname:new FormControl('',[Validators.required]),
    maxsize:new FormControl('',[Validators.required]),
    minsize:new FormControl('',[Validators.required]),
    prizemoney:new FormControl('',[Validators.required]),
    enteryfee: new FormControl('',[Validators.required]),
    rank1prize:new FormControl('',[Validators.required]),
    rank2prize:new FormControl('',[Validators.required]),
    rank3prize:new FormControl('',[Validators.required])
  });

  constructor(private _contestService:ContextService) { }

  ngOnInit(): void {
  }

  addContest(){
    this._contestService.create(this.contestForm.value).subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error)}
    )
  }

  get contestname(){
    return this.contestForm.get('contestname');
  }

  get maxsize(){
    return this.contestForm.get('maxsize');
  }

  get minsize(){
    return this.contestForm.get('minsize');
  }

  get prizemoney(){
    return this.contestForm.get('prizemoney');
  }

  get enteryfee(){
    return this.contestForm.get('enteryfee');
  }

  get rank1prize(){
    return this.contestForm.get('rank1prize');
  }

  get rank2prize(){
    return this.contestForm.get('rank2prize');
  }

  get rank3prize(){
    return this.contestForm.get('rank3prize');
  }
}
