import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHOptionComponent } from './option.component';
import {  BHButtonModule, BHLoggerModule  } from '../core';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHButtonModule,
        BHLoggerModule 
    ],
    declarations: [
        BHOptionComponent,
    ],
    bootstrap: [BHOptionComponent]
}) export class BHOptionModule {
    constructor() {
  }
  ngDoBootstrap(){}
}