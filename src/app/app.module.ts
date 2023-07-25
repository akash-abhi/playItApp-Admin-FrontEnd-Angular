import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainwindowComponent } from './components/mainwindow/mainwindow.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    DashboardComponent,
    SidebarComponent,
    MainwindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    MatListModule,
    BrowserModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
