import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/Sample__c";
import { publish, MessageContext } from 'lightning/messageService';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class Component1 extends NavigationMixin(LightningElement){

    @wire(MessageContext)
    messageContext;

    strInput;

    handleChange( event ) {

        this.strInput = event.target.value;

    }

    handleClick() {

        

        console.log('Component data:- '+this.strInput);
           
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
        attributes: {
                pageName: "testpage"    
            },
            state: {
                'category': this.strInput
               }
        });
       // sessionStorage.setItem('pageTransfer', JSON.stringify(this.strInput));
    
        }
        
    } 

    
