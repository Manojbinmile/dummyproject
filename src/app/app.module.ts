import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsComponent } from './forms/forms.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MessageComponent } from './message/message.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    DetailsComponent,
    SidebarComponent,
    FormsComponent,
    MessageComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton:true,
      timeOut:2000,
      progressBar:true,
    }),
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    AgGridModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
