import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MailsService } from '../mails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() role:String;
@Input() nom:String;
@Input() password:String;
@Input() admin:String;
constructor(private form:FormBuilder,private _UsersService:MailsService,private router:Router){ }
f:FormGroup;
t:boolean=true;
  ngOnInit() {
    console.log("aaaaaa");
    this.f=this.form.group({
    
      nom:[this.nom]
  })

  }
  deleteUse(){
    this._UsersService.deleteUser(this.f.value).subscribe();
 
   this.t=false;
 
  }
}
