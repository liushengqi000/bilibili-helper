import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHOptionComponent } from './option.component';
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
    declarations: [
        BHOptionComponent
    ],
    providers:[
        BHLoggerService,
        BHLoggerService
    ],
    bootstrap: [BHOptionComponent]
}) export class BHOptionModule {
    constructor() {
  }
  ngDoBootstrap(){}
}