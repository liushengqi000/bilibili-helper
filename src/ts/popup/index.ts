import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BhPopupComponent } from './popup.component';

import { BHCoreModule } from '../core';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHCoreModule
    ],
    providers: [],
    declarations: [
        BhPopupComponent
    ],
    bootstrap: [BhPopupComponent]
}) export class BhPopupModule {
    ngDoBootstrap() { }
}