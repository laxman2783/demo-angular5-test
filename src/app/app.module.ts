import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import{LoginComponent}  from './login.component';

import {AgGridModule} from 'ag-grid-angular/main';
import { routing } from "./app.routing";


import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   FooterComponent,
    ListComponent,
    LoginComponent,
   
   HighlightDirective
  ],
  imports: [
     BrowserModule,
      
    routing,HttpModule,AgGridModule.withComponents([AppComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
