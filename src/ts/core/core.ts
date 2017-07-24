import { BHButtonModule } from './button/index';
import {
    BHLoggerService,
    BHStorejsService
} from './services/index';

import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        BHButtonModule
    ],
    providers: [
        BHStorejsService,
        BHLoggerService
    ],
    declarations: [
    ],
    exports:[
        BHButtonModule
    ]
}) export class BHCoreModule {}