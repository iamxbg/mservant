"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ToDoEnums_1 = require("./to-do-list/ToDoEnums");
var ToDoServiceService = /** @class */ (function () {
    function ToDoServiceService(client) {
        this.currentToDos = new Array();
        this.httpClient = client;
    }
    ToDoServiceService.prototype.getTask = function () {
        console.log("invoke getTask");
        return this.httpClient.get("http://localhost:3000/getAll");
    };
    ToDoServiceService.prototype.setCurrent = function (td) {
        this.current = td;
    };
    ToDoServiceService.prototype.getCurrent = function () {
        return this.current;
    };
    ToDoServiceService.prototype.pushToCurrents = function (td) {
        if (this.currentToDos.length < 2) {
            if (this.current != null)
                this.current.status = ToDoEnums_1.TaskStatus.Pause;
            this.currentToDos.push(td);
            this.setCurrent(td);
            td.status = ToDoEnums_1.TaskStatus.Processing;
        }
        else {
            alert("同时进行任务不能超出" + this.currentToDos.length + "个");
            return;
        }
    };
    ToDoServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ToDoServiceService);
    return ToDoServiceService;
}());
exports.ToDoServiceService = ToDoServiceService;
