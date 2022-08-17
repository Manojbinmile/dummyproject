import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { redirectTo:'', path:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'signup', component:SignupComponent},
  {path:'details',component:DetailsComponent},
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
