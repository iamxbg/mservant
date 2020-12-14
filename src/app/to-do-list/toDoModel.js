"use strict";
exports.__esModule = true;
var ToDoEnums_1 = require("./ToDoEnums");
var toDo = /** @class */ (function () {
    function toDo(id, content, category_type, emergency_level, complex_type) {
        if (emergency_level === void 0) { emergency_level = ToDoEnums_1.EmergencyLevel.Low; }
        if (complex_type === void 0) { complex_type = ToDoEnums_1.ComplexType.Slip; }
        this.id = id;
        this.content = content;
        this.category_type = category_type;
        this.emergency_level = emergency_level;
        this.complex_type = complex_type;
        this.status = ToDoEnums_1.TaskStatus.Active;
    }
    toDo.prototype.getId = function () {
        return this.id;
    };
    return toDo;
}());
exports.toDo = toDo;
