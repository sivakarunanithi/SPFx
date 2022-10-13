var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneSlider, PropertyPaneDropdown } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'FlashnewsWebPartStrings';
import Flashnews from './components/Flashnews';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { IColumnReturnProperty, PropertyFieldColumnPicker, PropertyFieldColumnPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldColumnPicker';
import { sp } from '@pnp/sp';
import { SPService } from '../flashnews/service/service';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
var FlashnewsWebPart = /** @class */ (function (_super) {
    __extends(FlashnewsWebPart, _super);
    function FlashnewsWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._services = null;
        _this._listFields = [];
        return _this;
    }
    FlashnewsWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
            _this._services = new SPService(_this.context);
            _this.getListFields = _this.getListFields.bind(_this);
        });
    };
    FlashnewsWebPart.prototype.render = function () {
        var element = React.createElement(Flashnews, {
            description: this.properties.description,
            SiteUrl: this.properties.SiteUrl,
            ListName: this.properties.ListName,
            FilterBy: this.properties.FilterBy,
            condition: this.properties.condition,
            FilterValue: this.properties.FilterValue,
            webUrl: this.properties.webUrl,
            Title: this.properties.Title,
            context: this.context,
            list: this.properties.lists,
            column: this.properties.column,
            fields: this.properties.fields,
            speed: this.properties.speed,
            direction: this.properties.direction,
            bgcolor: this.properties.bgcolor,
            fgcolor: this.properties.fgcolor,
            fontname: this.properties.fontname,
            fontsize: this.properties.fontsize,
            height: this.properties.height,
            width: this.properties.width,
            descbgcolor: this.properties.descbgcolor,
            descfgcolor: this.properties.descfgcolor,
            descfontsize: this.properties.descfontsize,
            descfontname: this.properties.descfontname
        });
        ReactDom.render(element, this.domElement);
    };
    FlashnewsWebPart.prototype.getListFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allFields;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.properties.lists) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._services.getFields(this.properties.lists)];
                    case 1:
                        allFields = _b.sent();
                        this._listFields.length = 0;
                        (_a = this._listFields).push.apply(_a, allFields.map(function (field) { return ({ key: field.InternalName, text: field.Title }); }));
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    FlashnewsWebPart.prototype.listConfigurationChanged = function (propertyPath, oldValue, newValue) {
        console.log("LIST FIELDS:", this._listFields);
        if (propertyPath === 'lists' && newValue) {
            this.properties.fields = [];
            this.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
            this.context.propertyPane.refresh();
        }
        else {
            _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
        }
    };
    FlashnewsWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FlashnewsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    /* private async  getColumnData(){
      // get all the items from a list
      const items: any[] = await sp.web.lists.getById(this.properties.lists).items();
      console.log(items);
    } */
    FlashnewsWebPart.prototype.getPropertyPaneConfiguration = function () {
        // this.getListFields(); 
        //this.getColumnData();
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                // PropertyPaneTextField('SiteUrl', {
                                //   label: "Site Url"
                                // }),
                                PropertyFieldListPicker('lists', {
                                    label: 'Select a list',
                                    selectedList: this.properties.lists,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    //    baseTemplate: 100,
                                    onPropertyChange: this.listConfigurationChanged.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    key: 'listPickerFieldId',
                                }),
                                // PropertyFieldMultiSelect('fields', {
                                //   key: 'multiSelect',
                                //   label: "Multi select list fields",
                                //   options: this._listFields,
                                //   selectedKeys: this.properties.fields
                                // }),
                                PropertyFieldColumnPicker('column', {
                                    label: 'Select a column',
                                    context: this.context,
                                    selectedColumn: this.properties.column,
                                    listId: this.properties.lists,
                                    disabled: false,
                                    orderBy: PropertyFieldColumnPickerOrderBy.Title,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'columnPickerFieldId',
                                    displayHiddenColumns: false,
                                    columnReturnProperty: IColumnReturnProperty["Internal Name"]
                                }),
                                PropertyPaneSlider('speed', {
                                    label: "Speed",
                                    min: 5,
                                    max: 100,
                                    value: 5,
                                    showValue: true,
                                    step: 1
                                }),
                                PropertyFieldColumnPicker('FilterBy', {
                                    label: 'Select Filter column',
                                    context: this.context,
                                    selectedColumn: this.properties.FilterBy,
                                    listId: this.properties.lists,
                                    disabled: false,
                                    orderBy: PropertyFieldColumnPickerOrderBy.Title,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'columnPickerFieldId',
                                    displayHiddenColumns: false,
                                    columnReturnProperty: IColumnReturnProperty["Internal Name"]
                                }),
                                PropertyPaneTextField('Title', {
                                    label: "Title"
                                }),
                                PropertyPaneDropdown('direction', {
                                    label: 'Direction',
                                    options: [
                                        { key: 'left', text: 'left' },
                                        { key: 'right', text: 'right' },
                                    ],
                                }),
                            ]
                        }
                    ]
                },
                {
                    // header: {
                    //   description: "Design"
                    // },
                    groups: [
                        {
                            groupName: "Scrolling Text Design Configuration",
                            groupFields: [
                                PropertyFieldColorPicker('bgcolor', {
                                    label: 'Background Color',
                                    selectedColor: this.properties.bgcolor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    debounce: 1000,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyFieldColorPicker('fgcolor', {
                                    label: 'Text Color',
                                    selectedColor: this.properties.fgcolor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    debounce: 1000,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyPaneTextField('fontname', {
                                    label: "Font Name"
                                }),
                                PropertyPaneTextField('fontsize', {
                                    label: "Font Size"
                                }),
                                PropertyPaneTextField('height', {
                                    label: "Height"
                                }),
                                PropertyPaneTextField('width', {
                                    label: "Width"
                                }),
                            ]
                        }
                    ]
                },
                {
                    // header: {
                    //   description: "Design"
                    // },
                    groups: [
                        {
                            groupName: "Description Text Design Configuration",
                            groupFields: [
                                PropertyFieldColorPicker('descbgcolor', {
                                    label: 'Background Color',
                                    selectedColor: this.properties.descbgcolor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    debounce: 1000,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyFieldColorPicker('descfgcolor', {
                                    label: 'Text Color',
                                    selectedColor: this.properties.descfgcolor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    debounce: 1000,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Inline,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyPaneTextField('descfontname', {
                                    label: "Font Name"
                                }),
                                PropertyPaneTextField('descfontsize', {
                                    label: "Font Size"
                                })
                            ]
                        }
                    ]
                } // Page 3 end here
            ]
        };
    };
    return FlashnewsWebPart;
}(BaseClientSideWebPart));
export default FlashnewsWebPart;
//# sourceMappingURL=FlashnewsWebPart.js.map