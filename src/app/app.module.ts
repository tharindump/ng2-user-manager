import { UserDetailComponent } from './users/user-detail.component';
import { AddUserComponent } from './users/add-user.component';
import { UserDashBoardCompnent } from './users/dashboard.component';
import { AppComponent } from './app.component';

import { UserService } from './users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UserDashBoardCompnent,
    AddUserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
