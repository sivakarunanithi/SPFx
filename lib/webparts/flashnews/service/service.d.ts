import { WebPartContext } from "@microsoft/sp-webpart-base";
export declare class SPService {
    private context;
    constructor(context: WebPartContext);
    getFields(selectedList: string): Promise<any>;
}
//# sourceMappingURL=service.d.ts.map