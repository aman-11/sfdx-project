import { LightningElement, wire } from 'lwc';
import allAcc  from '@salesforce/apex/AccountManager.getAccounts'

export default class DisplayAccount extends LightningElement {

    @wire(allAcc) accounts; //this will return the 10 account
    get response() { 
        if(this.accounts)
            return true; 
        else
            return false;
    }

}