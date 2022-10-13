import * as React from 'react';
import { IAuditreportProps } from './IAuditreportProps';
export interface IAuditReport {
    operationType: string;
    activityDisplayName: string;
    activityDateTime: Date;
    userPrincipalName: string;
    ipAddress: string;
}
export interface IAuditReportState {
    auditRptState: IAuditReport[];
}
export default class Auditreport extends React.Component<IAuditreportProps, IAuditReportState> {
    constructor(props: IAuditreportProps);
    allauditLogs: IAuditReport[];
    GetEvents: () => void;
    render(): React.ReactElement<IAuditreportProps>;
}
//# sourceMappingURL=Auditreport.d.ts.map