import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrls: ['./assist.component.css']
})
export class AssistComponent implements OnInit {

  @Input() nom:String;
  @Input() prenom:String;
  @Input() mail:String;
  @Input() pj:String;
  @Input() objet:String;
  @Input() prod:String;
  @Input() msg:String;
  @Input() tel:Number;
  @Input() carte:String;
  @Input() id:Number;
  constructor(private form:FormBuilder,private _AssistService:MailsService) { }
  f:FormGroup;
  t:boolean=true;
  ngOnInit() {
    this.f=this.form.group({
    
      id:[this.id]
  })
  console.log("msg: "+this.msg);
  }
  accept(){
    this._AssistService.deleteAssist(this.f.value).subscribe();
    this.t=false;
  }
  supprimer(){
    this._AssistService.deleteAssist(this.f.value).subscribe();
 
   this.t=false;
  }

}
