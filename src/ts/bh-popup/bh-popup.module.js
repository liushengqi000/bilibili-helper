"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var bh_popup_component_1 = require("./bh-popup.component");
var bh_button_component_1 = require("../bh-button/bh-button.component");
var BhPopupModule = (function () {
    function BhPopupModule() {
    }
    BhPopupModule.prototype.ngDoBootstrap = function () { };
    return BhPopupModule;
}());
BhPopupModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        providers: [],
        declarations: [
            bh_popup_component_1.BhPopupComponent,
            bh_button_component_1.BhButtonComponent
        ],
        bootstrap: [bh_popup_component_1.BhPopupComponent]
    })
], BhPopupModule);
exports.BhPopupModule = BhPopupModule;
//# sourceMappingURL=bh-popup.module.js.map