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
exports.DailyReport = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const child_model_1 = require("../child/child.model");
const user_model_1 = require("../user/user.model");
let DailyReport = class DailyReport extends sequelize_typescript_1.Model {
};
exports.DailyReport = DailyReport;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "report_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "parentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], DailyReport.prototype, "parent", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => child_model_1.Child),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "childId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => child_model_1.Child),
    __metadata("design:type", child_model_1.Child)
], DailyReport.prototype, "child", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "sleep", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "nutrition", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "condition", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    }),
    __metadata("design:type", Number)
], DailyReport.prototype, "activity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: sequelize_typescript_1.DataType.NOW,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], DailyReport.prototype, "reportDate", void 0);
exports.DailyReport = DailyReport = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "daily_reports" })
], DailyReport);
//# sourceMappingURL=daily-report.model.js.map