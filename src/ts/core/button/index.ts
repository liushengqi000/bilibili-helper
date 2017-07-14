import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHButtonComponent } from './button.component'


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
        BHButtonComponent
    ],
    exports: [
        BHButtonComponent
    ]
}) export class BhButtonModule {
    constructor() {}
}