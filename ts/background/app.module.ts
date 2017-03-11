import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
}) export class AppModule {
  constructor(private appService: AppService) {
    this.appService.writeHeros();
  }
};