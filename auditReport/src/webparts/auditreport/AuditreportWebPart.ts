import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
//import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'AuditreportWebPartStrings';
import Auditreport from './components/Auditreport';
import { IAuditreportProps } from './components/IAuditreportProps';

export interface IAuditreportWebPartProps {
  description: string;
}

export default class AuditreportWebPart extends BaseClientSideWebPart<IAuditreportWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAuditreportProps> = React.createElement(
      Auditreport,
      {
        description: this.properties.description,
        context:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

 
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
