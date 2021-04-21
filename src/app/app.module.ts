import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { AlphaTradingModule } from './alpha-trading/alpha-trading.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainMenuComponent,
    NavigationTabsComponent],
  imports: [
    BrowserModule,
 MatTabsModule,   AppRoutingModule,
    AlphaTradingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
