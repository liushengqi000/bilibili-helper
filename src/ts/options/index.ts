import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHOptionComponent } from './option.component';
import { BHCoreModule } from '../index';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHCoreModule
    ],
    declarations: [
        BHOptionComponent
    ],
    bootstrap: [BHOptionComponent]
}) export class BHOptionModule {
    constructor() {
  }
  ngDoBootstrap(){}
}