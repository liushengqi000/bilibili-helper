import { Injectable } from '@angular/core';

@Injectable()
export class BHLogger{
    logs: string[] = [];
    log(message: string){
        this.logs.push(message);
        console.log(message);
    }
}