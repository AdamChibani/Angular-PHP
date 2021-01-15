import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MailsService } from '../mails.service';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
nomutil:String;
role:String;
password:String;
nom:String;
  constructor(private activatedRoute:ActivatedRoute,private form:FormBuilder,private mails:MailsService) { }
  f:FormGroup;
  ngOnInit() {
    this.nomutil= this.activatedRoute.snapshot.params['nom'];
    this.role= this.activatedRoute.snapshot.params['role'];
    this.password= this.activatedRoute.snapshot.params['password'];
    this.nom= this.activatedRoute.snapshot.params['admin'];
    this.f=this.form.group({
      roles:[this.role,Validators.required],
      nom:[this.nomutil,[Validators.required,Validators.pattern('[A-Za-z]+')]],
      pw:[this.password,]})
  }
  
  onSubmit(){
    console.log(this.f.value);
    this.mails.updateUser(this.f.value).subscribe();
  }

}
