"use strict";
require("angular");
//import { LinkModel } from "../../models/LinkModel"
//angular.module("app.updatecenter", ["ngRoute"])
//    .service("LinkModel", LinkModel)
//    .config(["$routeProvider", ($routeProvider) => {
//        $routeProvider
//            .when('/editor', <IHubRoute>{
//                template: '<product-updates></product-updates>',
//                pageTitle: 'UpdateCenter'
//            });
//    }]);
Component({
    selector: 'my-app',
    template: '<h1>My App</h1>'
});
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
