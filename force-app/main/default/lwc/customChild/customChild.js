import { LightningElement } from 'lwc';

export default class customChild extends LightningElement {

    nameHandlerEvent(event)
    {
        const name = event.target.value;
        this.dispatchEvent(new CustomEvent('newevent', {detail:name}))
    }
}