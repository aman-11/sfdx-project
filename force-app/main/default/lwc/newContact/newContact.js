import { LightningElement } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class LdsCreateRecord extends LightningElement {
    strName;
    strAccountNumber;
    strRating;
    strWebSite;
    strPhone;
    recordId;
    // Change Handlers.
    nameChangedHandler(event){
        this.strName = event.target.value;
    }
    numberChangedHandler(event){
        this.strAccountNumber = event.target.value;
    }
    websiteChangedHandler(event){
        this.strWebSite = event.target.value;
    }
    phoneChangedHandler(event){
        this.strPhone = event.target.value;
    }
    ratingChangeHandler(event)
    {
        this.strRating=event.detail.value;
    }
    // Insert record.
    createAccount(){
        // Creating mapping of fields of Account with values
        var fields = {'Name' : this.strName, 'Rating' :this.strRating, 'AccountNumber' : this.strAccountNumber, 'Website' :this.strWebSite, 'Phone' : this.strPhone};
        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Account', fields};
        // LDS method to create record.
        createRecord(objRecordInput).then(response => {
            const showSuccess =new ShowToastEvent({title:'Success',message:this.strName+' Successfully created',variant:'success'}); 
            this.dispatchEvent(showSuccess);
            this[NavigationMixin.Navigate](
                { "type":"standard__recordPage",
                 "attributes":{
                      "objectApiName":"Account",
                       "actionName":"view",
                       "recordId":this.recordId
                    }
                });
        }).catch(error => {
            alert('Error: ' +JSON.stringify(error));
        });
    }
    get options() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Finished', value: 'Cold' },
        ];
    }
}