import { LightningElement } from 'lwc';

export default class DisplayText extends LightningElement {

  nameHandlerEvent(event)
  {
      this.template.querySelector('c-get-text').changeName(event.target.value);
  }
}