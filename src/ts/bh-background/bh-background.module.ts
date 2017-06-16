/*
 * @CreateTime: Mar 17, 2017 3:40 PM 
 * @Author: Ruo 
 * @Contact: undefined 
 * @Last Modified By: Ruo 
 * @Last Modified Time: Mar 17, 2017 3:40 PM 
 * @Description: Modify Here, Please  
 */
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
  ngDoBootstrap(){}
};