import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MailsService } from '../mails.service';
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  constructor(private form:FormBuilder,private mails:MailsService,private activatedRoute:ActivatedRoute) { }
  f:FormGroup;
  admin:string;
  ngOnInit() {
    this.f=this.form.group({
      role:['',Validators.required],
      nom:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
      pw:['',]})
      this.admin= this.activatedRoute.snapshot.params['admin'];
  }
  onSubmit(){
    console.log(this.f.value);
    this.mails.addUser(this.f.value).subscribe();
  }

}
