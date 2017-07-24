import { BHButtonModule } from './button/index';
export {
    BHLoggerService,
    BHStorejsService
} from './services/index';

import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        BHButtonModule
    ],
    providers: [
    ],
    declarations: [
    ],
    exports:[
        BHButtonModule,
    ]
}) export class BHCoreModule {}