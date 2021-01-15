import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MailsService } from '../mails.service';
import { Users } from '../users';
@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {
  users: Users[];
  nom:string;
  constructor(private _AssistService:MailsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.nom= this.activatedRoute.snapshot.params['nom'];

    this._AssistService.getAssist().subscribe((data:Users[])=>{
      this.users=data;
       console.log(this.users[0]);
    }
      )
  }

}
