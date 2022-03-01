import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingRoutingModule} from './app-routing/app-routing-routing.module';
import {myrouting} from './app-routing/app-routing-routing.module';
import {MaterialModule} from './material/material.module';
import{HomeComponent} from '../app/components/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    myrouting
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
