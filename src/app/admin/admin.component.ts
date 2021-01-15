import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { MailsService } from '../mails.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users: Users[];
constructor(private form:FormBuilder,private _UsersService:MailsService,private activatedRoute:ActivatedRoute){ }
f:FormGroup;
nom:string;
ngOnInit() {
 
  this.nom= this.activatedRoute.snapshot.params['nom'];


    this._UsersService.getUsers().subscribe((data:Users[])=>{
      this.users=data;
       console.log(this.users[0]);
    }
      )
     
  }
  deleteUse(){
    this._UsersService.deleteUser(this.f.value).subscribe();
  }

}
