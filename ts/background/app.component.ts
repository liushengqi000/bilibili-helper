import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'my-app',
    template: `<h1>aaa{{name}}</h1>`
}) export class AppComponent {
    name = 'Angular!!';
}

