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
import Marquee from "react-fast-marquee";
import styles from './Flashnews.module.scss';
import { sp } from '@pnp/sp';
import Popup from 'reactjs-popup';
var Flashnews = /** @class */ (function (_super) {
    __extends(Flashnews, _super);
    function Flashnews(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = { itemstore: [] };
        return _this;
    }
    Flashnews.prototype.componentDidMount = function () {
        this.getColumnData();
    };
    Flashnews.prototype.componentWillMount = function () {
        this.getColumnData();
    };
    Flashnews.prototype.getColumnData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var today, filterString, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        today = new Date();
                        filterString = this.props.FilterBy + (" ge datetime'" + today.toISOString() + "'");
                        console.log(filterString);
                        return [4 /*yield*/, sp.web.lists.getById(this.props.list)
                                .items.filter(filterString).getAll()];
                    case 1:
                        items = _a.sent();
                        this.setState({ itemstore: items });
                        console.log("NOTHING IS IMPOSSIBLE");
                        return [2 /*return*/];
                }
            });
        });
    };
    /* private getsingleItem(columndata){
      var i=0;
      console.log(this.state.itemstore[i]["Title"]);
      {this.state.itemstore[i]["Title"] !=null ? <div><h1>iam here</h1></div>:<div><h1>I am out</h1></div>}
    } */
    /* private getsingleItem(columndata){
      console.log(this.state.itemstore.length);
      {this.state.itemstore.length > 0 ?
        <div>
      console.log("TTT");
      return(
       <div>
          <Ticker>
            {()=> <><h1>{columndata}</h1><img src="www.my-image-source.com/" alt=""/></> }
        </Ticker>
        </div>
      ) </div>: ""}
    } */
    // public mytestfunction()
    // {
    //   return(
    //     <div>
    //      <h1>"inside mytest functionTESSssssssssss"</h1>
    //     </div>
    //   )
    // }
    Flashnews.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.flashnews },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("h3", { style: { width: '174px', paddingLeft: '10px' } }, this.props.Title),
                    React.createElement(Marquee, { play: true, direction: this.props.direction, speed: this.props.speed, pauseOnHover: true, gradient: false, style: { "background-color": this.props.bgcolor, "color": this.props.fgcolor, "font-family": this.props.fontname, "font-size": this.props.fontsize, "height": this.props.height, "width": this.props.width } }, (this.state.itemstore.map(function (item, index) { return (React.createElement("div", null,
                        React.createElement(Popup, { trigger: React.createElement("div", null,
                                item["Title"],
                                "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0*** "), position: "right left" },
                            React.createElement("div", { style: { maxWidth: '300px', backgroundColor: _this.props.descbgcolor, color: _this.props.descfgcolor, fontSize: _this.props.descfontsize, fontFamily: _this.props.descfontname } }, item["Description"])))); })))))));
    };
    return Flashnews;
}(React.Component));
export default Flashnews;
//# sourceMappingURL=Flashnews.js.map