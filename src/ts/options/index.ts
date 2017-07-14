import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BhOptionComponent } from './option.component';
import { BHCoreModule } from '../core';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHCoreModule
    ],
    declarations: [
        BhOptionComponent,
    ],
    bootstrap: [BhOptionComponent]
}) export class BhOptionModule {
    constructor() {
  }
  ngDoBootstrap(){}
}