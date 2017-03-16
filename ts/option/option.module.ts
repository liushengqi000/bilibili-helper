import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OptionComponent } from './option.component'

@NgModule({
    imports: [BrowserModule],
    providers: [],
    declarations: [OptionComponent],
    bootstrap: [OptionComponent]
}) export class OptionModule {
    ngDoBootstrap() { }
}