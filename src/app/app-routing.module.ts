import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobSekeerComponent } from './job-sekeer/job-sekeer.component';
import { JobListComponent } from './job-list/job-list.component';
import { VideoinformationComponent } from './videoinformation/videoinformation.component';





const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'jobsekeer',component:JobSekeerComponent},
  {path:'listjob',component:JobListComponent},
  {path:'videoinformation',component:VideoinformationComponent}
  

 
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
