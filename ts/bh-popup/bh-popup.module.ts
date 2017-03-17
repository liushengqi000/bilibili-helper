import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BhPopupComponent } from './bh-popup.component'

@NgModule({
    imports: [BrowserModule],
    providers: [],
    declarations: [BhPopupComponent],
    bootstrap: [BhPopupComponent]
}) export class BhPopupModule {
    ngDoBootstrap() { }
}