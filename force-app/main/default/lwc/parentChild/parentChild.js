import { LightningElement } from 'lwc';

export default class ParentChild extends LightningElement {

    data;
    handleCustomEvent(event)
    {
        this.data = event.detail;
    }
}