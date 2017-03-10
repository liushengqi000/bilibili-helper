import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:`<h1>aaa{{name}}</h1>`
}) export class AppComponent{
    name = 'Angular!!';
}