import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopupComponent } from './popup.component'

@NgModule({
    imports: [BrowserModule],
    providers: [],
    declarations: [PopupComponent],
    bootstrap: [PopupComponent]
}) export class PopupModule {
    ngDoBootstrap() { }
}