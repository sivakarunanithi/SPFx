import * as React from 'react';
import { IFlashnewsProps } from './IFlashnewsProps';
export interface IFlashnewsState {
    itemstore: any[];
}
export default class Flashnews extends React.Component<IFlashnewsProps, IFlashnewsState> {
    constructor(props: IFlashnewsProps, state: IFlashnewsState);
    componentDidMount(): void;
    componentWillMount(): void;
    getColumnData(): Promise<void>;
    render(): React.ReactElement<IFlashnewsProps>;
}
//# sourceMappingURL=Flashnews.d.ts.map