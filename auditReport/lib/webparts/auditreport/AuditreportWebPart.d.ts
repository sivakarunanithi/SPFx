import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IAuditreportWebPartProps {
    description: string;
}
export default class AuditreportWebPart extends BaseClientSideWebPart<IAuditreportWebPartProps> {
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AuditreportWebPart.d.ts.map