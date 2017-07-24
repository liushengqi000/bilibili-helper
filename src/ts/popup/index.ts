import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHPopupComponent } from './popup.component';

import { 
    BHCoreModule,
    BHLoggerService,
    BHStorejsService
} from '../core';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BHCoreModule
    ],
    providers: [
        BHLoggerService,
        BHStorejsService
    ],
    declarations: [
        BHPopupComponent
    ],
    bootstrap: [BHPopupComponent]
}) export class BHPopupModule {
    ngDoBootstrap() { }
}