import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BhBackgroundService } from './bh-background.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  bootstrap: [],
  providers: [BhBackgroundService]
}) export class BhBackgroundModule {
  constructor(private appService: BhBackgroundService) {
    this.appService.writeHeros();
  }
};