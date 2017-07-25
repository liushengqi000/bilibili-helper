import { Injectable } from '@angular/core';

@Injectable()
export class BHLoggerService{
    logs: string[] = [];
    public log(message: string){
        this.logs.push(message);
        console.log(message);
    }
}