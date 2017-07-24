import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHPopupComponent } from './popup.component';

import { BHCoreModule } from '../index';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHCoreModule
    ],
    providers: [
    ],
    declarations: [
        BHPopupComponent
    ],
    bootstrap: [BHPopupComponent]
}) export class BHPopupModule {
    ngDoBootstrap() { }
}