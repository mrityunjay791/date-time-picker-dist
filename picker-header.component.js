"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var picker_service_1 = require("./picker.service");
var PickerHeaderComponent = (function () {
    function PickerHeaderComponent(service) {
        this.service = service;
        this.onDialogTypeChange = new core_1.EventEmitter();
    }
    PickerHeaderComponent.prototype.ngOnInit = function () {
        this.hourTime = this.service.dtHourTime;
        this.showSeconds = this.service.dtShowSeconds;
        this.pickerType = this.service.dtPickerType;
        this.mode = this.service.dtMode;
        this.themeColor = this.service.dtTheme;
    };
    PickerHeaderComponent.prototype.setDialogType = function (type) {
        this.onDialogTypeChange.emit(type);
    };
    return PickerHeaderComponent;
}());
PickerHeaderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'dialog-picker-header',
                template: "<div class=\"picker-banner\" [ngClass]=\"{'small-mode': mode === 'dropdown' || mode === 'inline'}\" [ngStyle]=\"{'backgroundColor': themeColor}\"><div class=\"picker-banner-day\"><span [class.hidden]=\"dialogType === 0\">{{ (selectedMoment? selectedMoment : now) | moment: 'dddd'}}</span> <span [class.hidden]=\"dialogType !== 0\">{{ 'time picker' | translate }}</span></div><div class=\"picker-banner-moment\"><div class=\"moment-date\" *ngIf=\"pickerType === 'both' || pickerType === 'date'\" (click)=\"setDialogType(1)\"><div class=\"big\"><span>{{(selectedMoment? selectedMoment : now) | moment: 'Do'}}</span></div><div class=\"small\"><span>{{(selectedMoment? selectedMoment : now) | moment: 'MMM'}}</span> <span>{{(selectedMoment? selectedMoment : now) | moment: 'YYYY'}}</span></div></div><div class=\"moment-time\" *ngIf=\"pickerType === 'both' || pickerType === 'time'\" (click)=\"setDialogType(0)\"><div class=\"big\"><span *ngIf=\"hourTime === '12' && showSeconds\">{{(selectedMoment? selectedMoment : now) | moment: 'hh:mm:ss'}}</span> <span *ngIf=\"hourTime === '12' && !showSeconds\">{{(selectedMoment? selectedMoment : now) | moment: 'hh:mm'}}</span> <span *ngIf=\"hourTime === '24' && showSeconds\">{{(selectedMoment? selectedMoment : now) | moment: 'HH:mm:ss'}}</span> <span *ngIf=\"hourTime === '24' && !showSeconds\">{{(selectedMoment? selectedMoment : now) | moment: 'HH:mm'}}</span></div><div class=\"small\" *ngIf=\"hourTime === '12'\"><span>{{(selectedMoment? selectedMoment : now) | moment: 'A'}}</span></div></div></div></div>",
                styles: ["*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.picker-banner{width:100%;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.picker-banner-day{font-size:21.328px;line-height:40px;text-align:center;background:rgba(0,0,0,.09)}.small-mode .picker-banner-day{font-size:12px;line-height:20px}@media only screen and (max-width:480px){.picker-banner-day{font-size:12px;line-height:20px}}.picker-banner-moment{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.picker-banner-moment .moment-date,.picker-banner-moment .moment-time{padding:0 8px;padding:0 .5rem;cursor:pointer}.picker-banner-moment .moment-date:hover,.picker-banner-moment .moment-time:hover{color:rgba(255,255,255,.65)}.picker-banner-moment .moment-date{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:50%}@media only screen and (min-width:768px){.picker-banner-moment .moment-date{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}}.picker-banner-moment .moment-date .big,.picker-banner-moment .moment-date .small{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.picker-banner-moment .moment-date .big{font-size:50.56px;line-height:60px}.small-mode .picker-banner-moment .moment-date .big{font-size:21.328px;line-height:40px}@media only screen and (max-width:480px){.picker-banner-moment .moment-date .big{font-size:21.328px;line-height:40px}}.picker-banner-moment .moment-date .small{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:4.8px 8px;padding:.3rem .5rem;font-weight:300}.small-mode .picker-banner-moment .moment-date .small{font-size:8px;line-height:10px}@media only screen and (max-width:480px){.picker-banner-moment .moment-date .small{font-size:8px;line-height:10px}}.picker-banner-moment .moment-time{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.small-mode .picker-banner-moment .moment-time{width:50%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media only screen and (max-width:480px){.picker-banner-moment .moment-time{width:50%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media only screen and (min-width:768px){.picker-banner-moment .moment-time{width:50%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}.picker-banner-moment .moment-time .big,.picker-banner-moment .moment-time .small{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.picker-banner-moment .moment-time .big{font-size:37.92px;line-height:40px;font-weight:100}.small-mode .picker-banner-moment .moment-time .big{font-size:16px;line-height:20px}@media only screen and (max-width:480px){.picker-banner-moment .moment-time .big{font-size:16px;line-height:20px}}.picker-banner-moment .moment-time .small{font-size:21.328px;line-height:40px;padding:0 5px}.small-mode .picker-banner-moment .moment-time .small{font-size:8px;line-height:10px}@media only screen and (max-width:480px){.picker-banner-moment .moment-time .small{font-size:8px;line-height:10px}}"],
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            },] },
];
PickerHeaderComponent.ctorParameters = function () { return [
    { type: picker_service_1.PickerService, },
]; };
PickerHeaderComponent.propDecorators = {
    'dialogType': [{ type: core_1.Input },],
    'selectedMoment': [{ type: core_1.Input },],
    'now': [{ type: core_1.Input },],
    'onDialogTypeChange': [{ type: core_1.Output },],
};
exports.PickerHeaderComponent = PickerHeaderComponent;
//# sourceMappingURL=picker-header.component.js.map