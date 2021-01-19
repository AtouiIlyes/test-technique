import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainComponent],
  imports: [MainRoutingModule, HttpClientModule, FormsModule, MatButtonModule],
  providers: [],
})
export class MainModule {}
