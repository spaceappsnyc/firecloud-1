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
// export for convenience.
var router_1 = require("@angular/router");
exports.ActivatedRoute = router_1.ActivatedRoute;
exports.Router = router_1.Router;
exports.RouterLink = router_1.RouterLink;
exports.RouterOutlet = router_1.RouterOutlet;
var core_1 = require("@angular/core");
var RouterLinkStubDirective = /** @class */ (function () {
    function RouterLinkStubDirective() {
        this.navigatedTo = null;
    }
    RouterLinkStubDirective.prototype.onClick = function () {
        this.navigatedTo = this.linkParams;
    };
    __decorate([
        core_1.Input('routerLink'),
        __metadata("design:type", Object)
    ], RouterLinkStubDirective.prototype, "linkParams", void 0);
    RouterLinkStubDirective = __decorate([
        core_1.Directive({
            selector: '[routerLink]',
            host: {
                '(click)': 'onClick()'
            }
        })
    ], RouterLinkStubDirective);
    return RouterLinkStubDirective;
}());
exports.RouterLinkStubDirective = RouterLinkStubDirective;
var RouterOutletStubComponent = /** @class */ (function () {
    function RouterOutletStubComponent() {
    }
    RouterOutletStubComponent = __decorate([
        core_1.Component({ selector: 'router-outlet', template: '' })
    ], RouterOutletStubComponent);
    return RouterOutletStubComponent;
}());
exports.RouterOutletStubComponent = RouterOutletStubComponent;
var RouterStub = /** @class */ (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigate = function (commands, extras) { };
    RouterStub = __decorate([
        core_1.Injectable()
    ], RouterStub);
    return RouterStub;
}());
exports.RouterStub = RouterStub;
// Only implements params and part of snapshot.paramMap
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var router_2 = require("@angular/router");
var ActivatedRouteStub = /** @class */ (function () {
    function ActivatedRouteStub() {
        // ActivatedRoute.paramMap is Observable
        this.subject = new BehaviorSubject_1.BehaviorSubject(router_2.convertToParamMap(this.testParamMap));
        this.paramMap = this.subject.asObservable();
    }
    Object.defineProperty(ActivatedRouteStub.prototype, "testParamMap", {
        get: function () { return this._testParamMap; },
        set: function (params) {
            this._testParamMap = router_2.convertToParamMap(params);
            this.subject.next(this._testParamMap);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteStub.prototype, "snapshot", {
        // ActivatedRoute.snapshot.paramMap
        get: function () {
            return { paramMap: this.testParamMap };
        },
        enumerable: true,
        configurable: true
    });
    ActivatedRouteStub = __decorate([
        core_1.Injectable()
    ], ActivatedRouteStub);
    return ActivatedRouteStub;
}());
exports.ActivatedRouteStub = ActivatedRouteStub;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=router-stubs.js.map