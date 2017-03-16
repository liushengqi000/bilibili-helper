import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BackgroundService } from './background.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  bootstrap: [],
  providers: [BackgroundService]
}) export class BackgroundModule {
  constructor(private appService: BackgroundService) {
    this.appService.writeHeros();
  }
  ngDoBootstrap(){}
};