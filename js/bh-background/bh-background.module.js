"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @CreateTime: Mar 17, 2017 3:40 PM
 * @Author: Ruo
 * @Contact: undefined
 * @Last Modified By: Ruo
 * @Last Modified Time: Mar 17, 2017 3:40 PM
 * @Description: Modify Here, Please
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var bh_background_service_1 = require("./bh-background.service");
var BhBackgroundModule = (function () {
    function BhBackgroundModule(appService) {
        this.appService = appService;
        this.appService.writeHeros();
    }
    BhBackgroundModule.prototype.ngDoBootstrap = function () { };
    return BhBackgroundModule;
}());
BhBackgroundModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [],
        bootstrap: [],
        providers: [bh_background_service_1.BhBackgroundService]
    }),
    __metadata("design:paramtypes", [bh_background_service_1.BhBackgroundService])
], BhBackgroundModule);
exports.BhBackgroundModule = BhBackgroundModule;
;
