import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AlphaTradingComponent } from './alpha-trading.component';
import { MatTabsModule } from '@angular/material/tabs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AlphaTradingComponent
  ],
  imports: [
      
  ],
  exports: [AlphaTradingComponent], providers: []
})
export class AlphaTradingModule { }
