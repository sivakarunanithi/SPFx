import * as React from 'react';
//import styles from './Auditreport.module.scss';
import { IAuditreportProps } from './IAuditreportProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { MSGraphClientV3 } from '@microsoft/sp-http';
import { DetailsList, PrimaryButton } from 'office-ui-fabric-react';

export interface IAuditReport{
  operationType:string;
  activityDisplayName:string;
  activityDateTime:Date;
  userPrincipalName:string;
  ipAddress:string;
}

export interface IAuditReportState{
  auditRptState:IAuditReport[];
}


export default class Auditreport extends React.Component<IAuditreportProps, IAuditReportState> {
  constructor(props:IAuditreportProps){
    super(props);
    this.state={auditRptState:[]}
  }

  public allauditLogs:IAuditReport[]=[];

  public  GetEvents =():void =>{
    console.log("inside");
  //  const client = await this.props.context.msGraphClientFactory.getClient('3');
    //this.props.context.msGraphClientFactory.getClient('3')
    this.props.context.msGraphClientFactory
    .getClient('3')
    .then((client:MSGraphClientV3): void => {
      client  
      .api("/auditLogs/directoryAudits")
            .version("v1.0")
           // .filter("userPrincipalName eq null")
          //  .select("operationType,activityDisplayName,activityDateTime,initiatedBy")
            .get((err,res) => {
              if(err){
                 console.log("Error Occured",err);
              }
              console.log("Error Occured",err);
              console.log("Response",err);
              console.log("TEST",res)
              res?.value?.map((result:any) => {
                console.log("inside");
                 this.allauditLogs.push({
                  operationType:result.operationType,
                  activityDisplayName:result.activityDisplayName,
                  activityDateTime:result.activityDateTime,
                  userPrincipalName: result.initiatedBy.user?.["userPrincipalName"],
                  ipAddress: result.initiatedBy.user?.["ipAddress"]
                });
                console.log(this.allauditLogs);
              });
          this.setState({auditRptState:this.allauditLogs})
      })
    })
  };


  public render(): React.ReactElement<IAuditreportProps> {
    return (
     <div id="parent">
      <PrimaryButton text='Click Me' onClick={this.GetEvents}></PrimaryButton>
      <DetailsList items={this.allauditLogs}></DetailsList>
     </div>
    );
  }
}
