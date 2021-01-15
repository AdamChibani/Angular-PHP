import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MailsService } from '../mails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() nom:String;
  @Input() prenom:String;
  @Input() mail:String;
  @Input() cv:String;
  @Input() ville:String;
  @Input() adresse:String;
  @Input() profession:String;
  @Input() tel:Number;
  @Input() message:String;
  @Input() id:Number;
  constructor(private form:FormBuilder,private _UsersService:MailsService,private router:Router){ }
  f:FormGroup;
  t:boolean=true;

  ngOnInit() {
    this.f=this.form.group({
    
      id:[this.id]
  })
  }
  accept(){
    this._UsersService.acceptCV(this.f.value).subscribe();

   this.t=false;
  }
  refuser(){
    this._UsersService.deleteCV(this.f.value).subscribe();
 
   this.t=false;
  }

}
