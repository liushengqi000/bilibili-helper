import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BhOptionComponent } from './bh-option.component'
import { BhButtonComponent } from '../bh-button/bh-button.component'


@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    declarations: [
        BhOptionComponent,
        BhButtonComponent
    ],
    bootstrap: [BhOptionComponent]
}) export class BhOptionModule {
    constructor() {
  }
  ngDoBootstrap(){}
}