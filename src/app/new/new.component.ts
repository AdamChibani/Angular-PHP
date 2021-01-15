import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MailsService } from '../mails.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input() titre:String;
  @Input() sujet:String;
  @Input() image:String;
  constructor(private form:FormBuilder,private _NewsService:MailsService) { }
  f:FormGroup;
  ngOnInit() {
    console.log(this.image);
    this.f=this.form.group({
    
      titre:[this.titre],
      sujet:[this.sujet],
      image:[this.image]
  })
    console.log(this.f);
  }
  onFileChange(event) {   
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.f.get('image').setValue(file);    
      this.image=event.target.files[0];  
    }  
  }
  preview(){
    const formData = new FormData();
    formData.append('avatar', this.f.get('image').value);
    this._NewsService.previewNews(formData).subscribe();
    this.image=this.f.get('image').value.name;
  }
  test(){
    this._NewsService.news(this.f.value).subscribe();
    const formData = new FormData();
    formData.append('avatar', this.f.get('image').value);
    this._NewsService.newsimage(formData).subscribe();
    this.image=this.f.get('image').value.name;
    this.titre=this.f.get('titre').value;
    this.sujet=this.f.get('sujet').value;
    

  }

}
