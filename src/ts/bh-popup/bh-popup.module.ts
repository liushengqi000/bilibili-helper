import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BhPopupComponent } from './bh-popup.component';
import { BhButtonComponent } from '../bh-button/bh-button.component'

import { BHLogger } from '../bh-logger/logger.service';

  
@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule],
    providers: [BHLogger],
    declarations: [
        BhPopupComponent,
        BhButtonComponent
    ],
    bootstrap: [BhPopupComponent]
}) export class BhPopupModule {
    ngDoBootstrap() { }
}