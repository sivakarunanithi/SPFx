var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { DetailsList, PrimaryButton } from 'office-ui-fabric-react';
var Auditreport = /** @class */ (function (_super) {
    __extends(Auditreport, _super);
    function Auditreport(props) {
        var _this = _super.call(this, props) || this;
        _this.allauditLogs = [];
        _this.GetEvents = function () {
            console.log("inside");
            //  const client = await this.props.context.msGraphClientFactory.getClient('3');
            //this.props.context.msGraphClientFactory.getClient('3')
            _this.props.context.msGraphClientFactory
                .getClient('3')
                .then(function (client) {
                client
                    .api("/auditLogs/directoryAudits")
                    .version("v1.0")
                    // .filter("userPrincipalName eq null")
                    //  .select("operationType,activityDisplayName,activityDateTime,initiatedBy")
                    .get(function (err, res) {
                    var _a;
                    if (err) {
                        console.log("Error Occured", err);
                    }
                    console.log("Error Occured", err);
                    console.log("Response", err);
                    console.log("TEST", res);
                    (_a = res === null || res === void 0 ? void 0 : res.value) === null || _a === void 0 ? void 0 : _a.map(function (result) {
                        var _a, _b;
                        console.log("inside");
                        _this.allauditLogs.push({
                            operationType: result.operationType,
                            activityDisplayName: result.activityDisplayName,
                            activityDateTime: result.activityDateTime,
                            userPrincipalName: (_a = result.initiatedBy.user) === null || _a === void 0 ? void 0 : _a["userPrincipalName"],
                            ipAddress: (_b = result.initiatedBy.user) === null || _b === void 0 ? void 0 : _b["ipAddress"]
                        });
                        console.log(_this.allauditLogs);
                    });
                    _this.setState({ auditRptState: _this.allauditLogs });
                });
            });
        };
        _this.state = { auditRptState: [] };
        return _this;
    }
    Auditreport.prototype.render = function () {
        return (React.createElement("div", { id: "parent" },
            React.createElement(PrimaryButton, { text: 'Click Me', onClick: this.GetEvents }),
            React.createElement(DetailsList, { items: this.allauditLogs })));
    };
    return Auditreport;
}(React.Component));
export default Auditreport;
//# sourceMappingURL=Auditreport.js.map