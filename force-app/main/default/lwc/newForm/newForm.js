import { LightningElement,track ,api } from 'lwc';
// Importing Apex Class method
import saveContactRecord from '@salesforce/apex/insertRecord.saveContactRecord';
// importing to show toast notifictions
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

import objcontact from '@salesforce/schema/Contact';
// importing Account fields
import FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import COMPANY_FIELD from '@salesforce/schema/Contact.Company__c';
import GRADE_FIELD from '@salesforce/schema/Contact.Grade__c';
import SPECIES_FIELD from '@salesforce/schema/Contact.Species__c';
import THICKNESS_FIELD from '@salesforce/schema/Contact.Thickness__c';
import QUANTITY_FIELD from '@salesforce/schema/Contact.Quantity__c';
import UNITOFMEASURE_FIELD from '@salesforce/schema/Contact.UnitofMeasure__c';
import DELIVERYDESTINATION_FIELD from '@salesforce/schema/Contact.DeliveryDestination__c';
import SPECIALREQUEST_FIELD from '@salesforce/schema/Contact.SpecialRequests__c';
import COMMENTS_FIELD from '@salesforce/schema/Contact.Comments__c';


export default class newForm  extends NavigationMixin (LightningElement) {
    @track error;

    @track con = {
     objFirstName:FNAME_FIELD,
     objLastName:LNAME_FIELD,
     objEmail:EMAIL_FIELD,
     objPhone:PHONE_FIELD,
     objCompany:COMPANY_FIELD,
     objGrade:GRADE_FIELD,
     objSpecies:SPECIES_FIELD,
     objThickness:THICKNESS_FIELD,
     objQuantity:QUANTITY_FIELD,
     objUnitofMeasure:UNITOFMEASURE_FIELD,
     objDeliveryDestination:DELIVERYDESTINATION_FIELD,
     objComments:SPECIALREQUEST_FIELD,
     objContactId:COMMENTS_FIELD
    };
   HandleChange(event){
        if(event.target.name == 'FirstName'){
        this.con.objFirstName = event.target.value;  
        
        }
        if(event.target.name == 'LastName'){
            this.con.objLastName = event.target.value;  
            
            }
            
      if(event.target.name == 'Email'){
        this.con.objEmail = event.target.value;  
      }
 
      if(event.target.name == 'Phone'){
        this.con.objPhone = event.target.value;  
      }
      if(event.target.name == 'Company'){
        this.con.objCompany = event.target.value;  
      }
      if(event.target.name == 'Grade'){
       this.con.objGrade = event.target.value;  
      }
      if(event.target.name == 'Species'){
        this.con.objSpecies = event.target.value;  
      }
      if(event.target.name == 'Thickness'){
        this.con.objThickness = event.target.value;  
       }
       if(event.target.name == 'Quantity'){
         this.con.objQuantity = event.target.value;  
       }
       if(event.target.name == 'UnitofMeasure'){
        this.con.objUnitofMeasure = event.target.value;  
       }
       if(event.target.name == 'DeliveryDestination'){
         this.con.objDeliveryDestination = event.target.value;  
       }
       if(event.target.name == 'SpecialRequests'){
        this.con.objSpecialRequests = event.target.value;  
       }
       if(event.target.name == 'Comments'){
         this.con.objComments = event.target.value;  
       }
 
 
 }
 /*
 submitAction(){
    submitScoreAction({ FirstName:this.objFirstName, LastName:this.objLastName, Email:this.objEmail, Phone:this.objPhone, Company:this.objCompany, Grade:this.objGrade, Species:this.objSpecies, Thickness:this.objThickness, Quantity:this.objQuantity, UnitofMeasure:this.objUnitofMeasure, DeliveryDestination:this.objDeliveryDestination, SpecialRequests:this.objSpecialRequests, Comments:this.objComments})
    .then(result=>{
        this.ContactId = result.Id;    
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record created successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);
 
           /*Start Navigation*/
          
         /*End Navigation
 
    })
    .catch(error =>{
       this.errorMsg=error.message;
       window.console.log(this.error);
    });
 
 }
 */
 submitAction(){
    saveContactRecord({objcontact: this.con})
        .then(result => {
            // Clear the user enter values
            this.con = {};

            window.console.log('result ===> '+result);
            
            // Show success messsage
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Contact Created Successfully!!',
                variant: 'success'
            }),);
            
        })
        .catch(error => {
            this.error = error.message;
        });

}
}