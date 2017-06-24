import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { WebServices } from './shared/web.services';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule ],
  declarations: [ AppComponent, NavComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebServices ]
})
export class AppModule { }
