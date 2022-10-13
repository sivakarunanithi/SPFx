import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IFlashnewsWebPartProps {
    description: string;
    SiteUrl: string;
    ListName: string;
    FilterBy: string;
    condition: string;
    FilterValue: string;
    webUrl: string;
    Title: string;
    itemstore: [];
    lists: string;
    column: string;
    fields: string[];
    speed: number;
    direction: string;
    bgcolor: string;
    fgcolor: string;
    fontname: string;
    fontsize: string;
    height: string;
    width: string;
    descbgcolor: string;
    descfgcolor: string;
    descfontsize: string;
    descfontname: string;
}
export default class FlashnewsWebPart extends BaseClientSideWebPart<IFlashnewsWebPartProps> {
    private _services;
    private _listFields;
    protected onInit(): Promise<void>;
    render(): void;
    getListFields(): Promise<void>;
    private listConfigurationChanged;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FlashnewsWebPart.d.ts.map