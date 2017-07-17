import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHLogger } from './logger.service'


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
    ],
    providers: [
        BHLogger
    ],
    exports: [
    ]
}) export class BHLoggerModule {
    constructor() {}
}