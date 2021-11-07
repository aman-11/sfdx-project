import { api, LightningElement } from 'lwc';

export default class GetText extends LightningElement {
  
    text;
    @api 

    changeName(name)
    {
        this.text = name.toLowerCase();
    }
}