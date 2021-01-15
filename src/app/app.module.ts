import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AssistantComponent } from './assistant/assistant.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifierComponent } from './modifier/modifier.component';
import { UserComponent } from './user/user.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { RhComponent } from './rh/rh.component';
import { CvComponent } from './cv/cv.component';
import { NewsComponent } from './news/news.component';
import { NewComponent } from './new/new.component';
import { AssistComponent } from './assist/assist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AssistantComponent,
    ModifierComponent,
    UserComponent,
    AjouterComponent,
    RhComponent,
    CvComponent,
    NewsComponent,
    NewComponent,
    AssistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
