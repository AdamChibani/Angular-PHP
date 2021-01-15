import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModifierComponent} from './modifier/modifier.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AssistantComponent } from './assistant/assistant.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import {RhComponent} from './rh/rh.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'modifier/:nom/:role/:password/:admin', component:ModifierComponent},
  {path:'ajouter/:admin',component:AjouterComponent},
  {path:'assistant/:nom',component:AssistantComponent},
  {path:'admin/:nom',component:AdminComponent},
  {path:'rh/:nom', component:RhComponent},
  {path:'news/:nom', component:NewsComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
