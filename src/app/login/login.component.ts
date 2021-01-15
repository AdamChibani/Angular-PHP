import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private _LoginService:MailsService) {

  }
  users: Users[];
  pw:string;
  username:string;
  logAsAdmin(pw:string,un:string){
   for (let i in this.users){
     console.log(this.users[i]);
     if (this.users[i].password==pw && this.users[i].nom==un){
       console.log(this.users[i].nom);
      switch(this.users[i].role){
        case "admin": { this.router.navigate(['/admin',this.users[i].nom]);break;}
        case "resource humaine": {this.router.navigate(['/rh', this.users[i].nom]);break;}
        case "news": {this.router.navigate(['/news', this.users[i].nom]);break;}
        case "assistant": {this.router.navigate(['/assistant', this.users[i].nom]);break;}
      }
  
      return 0;
     }
   }
   alert ('Invalid password and username combination!');
    }
   

  ngOnInit() {
    this._LoginService.getUsers().subscribe((data:Users[])=>{
      this.users=data;
       console.log(this.users[0]);
    }
      )
  }

}
