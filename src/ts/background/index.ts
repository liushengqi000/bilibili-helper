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

import { BHBackgroundService } from './background.service';
import { 
  BHLoggerService,
  BHStorejsService
} from '../core';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [],
  bootstrap: [],
  providers: [
    BHBackgroundService,
    BHLoggerService,
    BHStorejsService
  ]
}) export class BHBackgroundModule {
  constructor(
    private BackgroundService: BHBackgroundService,
    private logger: BHLoggerService
  ) {
    this.BackgroundService.writeHeros();
    this.logger.log('Background init');
  }
  ngDoBootstrap() { }
};