import { Injectable } from '@angular/core';
import {Users} from './users';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MailsService {
 
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<Users[]>('http://localhost/carteAng/users.php');
  }
  getApplicants(){
    return this.http.get<Users[]>('http://localhost/carteAng/getApplicants.php');
  }
  getNews(){
    return this.http.get<Users[]>('http://localhost/carteAng/getNews.php');
  }
  getAssist(){
    return this.http.get<Users[]>('http://localhost/carteAng/getAssist.php');
  }
  deleteAssist(nom:String){
    return this.http.post('http://localhost/carteAng/deleteAssist.php',nom);
  }
  deleteUser(nom:String){
    return this.http.post('http://localhost/carteAng/deleteUser.php',nom);
  }
  addUser(user:Users){
    return this.http.post('http://localhost/carteAng/addUser.php',user);
  }
  updateUser(user:Users){
    return this.http.post('http://localhost/carteAng/modifUser.php',user);
  }
  news(user:Users){
    return this.http.post('http://localhost/carteAng/news.php',user);
  }
  deleteCV(user:Users){
    return this.http.post('http://localhost/carteAng/deleteCV.php',user);
  }
  acceptCV(user:Users){
    return this.http.post('http://localhost/carteAng/acceptCV.php',user);
  }
  SERVER_URL: string = "http://localhost/carteAng";


  public newsimage(data) {
    let uploadURL = `${this.SERVER_URL}/newsimage.php`;

    return this.http.post<any>(uploadURL, data);
  }
  public previewNews(data) {
    let uploadURL = `${this.SERVER_URL}/previewNews.php`;

    return this.http.post<any>(uploadURL, data);
  }
}
