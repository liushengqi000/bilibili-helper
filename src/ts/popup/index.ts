import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHPopupComponent } from './popup.component';

import { BHButtonModule, BHLoggerModule } from '../core';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHButtonModule,
        BHLoggerModule 
    ],
    providers: [],
    declarations: [
        BHPopupComponent
    ],
    bootstrap: [BHPopupComponent]
}) export class BHPopupModule {
    ngDoBootstrap() { }
}