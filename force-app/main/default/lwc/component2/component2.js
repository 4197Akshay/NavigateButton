import { LightningElement, wire,api } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/Sample__c";
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';

export default class Component2 extends LightningElement {
/** */
@api  receivedMessage;
@api   urlParam;
   

    connectedCallback() {
        let testURL = window.location.href;
        let newURL = new URL(testURL).searchParams;
        // eslint-disable-next-line no-console
        console.log('id ===> '+newURL.get('category'));
        this.urlParam = newURL.get('category');
        this.receivedMessage = newURL.get('category');
    }

   

}