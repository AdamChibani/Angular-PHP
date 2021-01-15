import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailsService } from '../mails.service';
import { Users } from '../users';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  users: Users[];
  nom:string;
  constructor(private _NewsService:MailsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.nom= this.activatedRoute.snapshot.params['nom'];


    this._NewsService.getNews().subscribe((data:Users[])=>{
      this.users=data;
       console.log(this.users[0]);
    }
      )
     
  }
  

}
