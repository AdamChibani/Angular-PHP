import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailsService } from '../mails.service';
import { Users } from '../users';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit {
  users: Users[];
  nom:string;
  constructor(private _RhService:MailsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
 
    this.nom= this.activatedRoute.snapshot.params['nom'];

    this._RhService.getApplicants().subscribe((data:Users[])=>{
      this.users=data;
       console.log(this.users[0]);
    }
      )
     
  }

}
