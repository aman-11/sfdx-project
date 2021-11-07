import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationServices extends NavigationMixin (LightningElement) {

    navigateAccObject(event){
        this[NavigationMixin.Navigate](
            { "type":"standard__objectPage",
             "attributes":{
                  "objectApiName":"Account",
                   "actionName":"home" 
                }
            });   
    }

    navigateToWebPage(event){
        this[NavigationMixin.Navigate]({ "type":"standard__webPage",
            "attributes":{
                "url":"https://trailhead.salesforce.com/",
            }
        });
    }

    navigateConObject(event){
        this[NavigationMixin.Navigate](
            { "type":"standard__objectPage",
             "attributes":{
                  "objectApiName":"Contact",
                   "actionName":"gotoContact" 
                }
            });
    }

}