import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BhPopupComponent } from './bh-popup.component';
import { BhButtonComponent } from '../bh-button/bh-button.component';

  
@NgModule({
    imports: [BrowserModule],
    providers: [],
    declarations: [
        BhPopupComponent,
        BhButtonComponent
        ],
    bootstrap: [BhPopupComponent]
}) export class BhPopupModule {
    ngDoBootstrap() { }
}