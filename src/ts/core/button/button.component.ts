import { 
    Component, 
    Input, 
    Output, 
    OnInit, 
    HostListener, 
    ElementRef,
    ViewEncapsulation
} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
@Component({
    moduleId: module.id,
    selector: 'bh-button',
    templateUrl: './bh-button.html',
    styleUrls: ['./bh-button.css'],
    encapsulation: ViewEncapsulation.Native,
    animations:[
        trigger('hoverState',[
            state('hover',style({
                backgroundColor:'#eee',
                opacity: 0.5
            })),
            transition('void => *', animate('100ms ease-in')),
            transition('* => void', animate('100ms ease-out'))
        ])
    ]
}) export class BHButtonComponent implements OnInit {
    @Input() href: string;
    @Input() i18n: string;
    private  isHover: string;
    constructor() {
        
    }
    @HostListener('mouseenter') onMouseEnter(){
        this.isHover = 'hover';
    }
    @HostListener('mouseleave') onMouseleave(){
        this.isHover = '';
    }
    ngOnInit() {}
    go() {
        chrome.tabs.create({
            url: this.href
        })
    }
}