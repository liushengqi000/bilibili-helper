import { Component, Input, Output, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'bh-button',
    templateUrl: './bh-button.html',
    styleUrls: ['./bh-button.css']
}) export class BhButtonComponent implements OnInit {
    @Input() href: string;
    constructor() {}
    ngOnInit() {}
    go() {
        chrome.tabs.create({
            url: this.href
        })
    }
}