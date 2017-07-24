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
    templateUrl: './button.html',
    styleUrls: ['./button.css'],
    // encapsulation: ViewEncapsulation.Emulated,
    animations:[
        trigger('hoverState',[
            state('hover',style({
                backgroundColor:'#eee',
                opacity: 0.5
            })),
            transition('void => *', [
                // style({transform: 'translateX(-100%)'}),
                animate('100ms ease-in')
            ]),
            transition('* => void', [
                // style({transform: 'translateX(100%)'}),
                animate('100ms ease-out')
            ])
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