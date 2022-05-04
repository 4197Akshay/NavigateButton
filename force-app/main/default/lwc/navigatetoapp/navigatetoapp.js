import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import communityId from '@salesforce/community/Id';
import userId from '@salesforce/user/Id';
import basePath from '@salesforce/community/basePath';


export default class Navigatetoapp extends NavigationMixin(LightningElement) {

     /*  
    navigateToPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://curious-goat-d47ukp-dev-ed.preview.salesforce-communities.com/template/s/formpage?app=commeditor'
            },
        });
    }
  */
    navigateTonewPage() {
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
        attributes: {
                pageName: "formpage"    
            },
        });
    }
    
    navitageToLWCWithoutAura() {
        
        // Encode the componentDefinition JS object to Base64 format to make it url addressable
       // let encodedComponentDef = btoa(JSON.stringify(componentDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url: 'formpage'
            }
        }).then(generatedUrl => {
            window.open(generatedUrl);
        });
    } 
    /*
     navigateTonext() {
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
        attributes: {
                pageName: "checkdata"    
            },
        });
        /* let componentDef='formpage';
        let encodedComponentDef = btoa(JSON.stringify(componentDef));
        this[NavigationMixin.GenerateUrl]({
            type: 'Comm__webPage',
            attributes: {
                url: basePath + encodedComponentDef
            },
        });
        
    }
   */
    }