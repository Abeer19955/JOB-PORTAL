import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobSekeerComponent } from './job-sekeer/job-sekeer.component';
import { JobListComponent } from './job-list/job-list.component';
import { VideoinformationComponent } from './videoinformation/videoinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
         LoginComponent,
         RegisterComponent,
         JobSekeerComponent,
         JobListComponent,
         VideoinformationComponent,
   
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
   MaterialModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   HttpClientModule,
   ToastrModule.forRoot()
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
