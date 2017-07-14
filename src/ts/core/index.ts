import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BhButtonModule } from './button/';
import { BhLoggerModule } from './logger/';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BhButtonModule,
        BhLoggerModule,
    ],
    declarations: [],
    providers:[
    ],
    exports: [
        BhButtonModule,
        BhLoggerModule,
    ]
}) export class BHCoreModule {
    constructor() {}
}