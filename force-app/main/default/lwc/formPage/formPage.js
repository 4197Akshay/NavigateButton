import { LightningElement, track } from 'lwc';
import submitContactAction from '@salesforce/apex/NewRecord.submitContactAction';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class FormPage  extends NavigationMixin (LightningElement) {
 
    @track objFirstName;
    @track objLastName;
    @track objEmail;
    @track objPhone;
    @track objCompany;
    @track objGrade;
    @track objSpecies;
    @track objThickness;
    @track objQuantity;
    @track objUnitofMeasure;
    @track objDeliveryDestination;
    @track objSpecialRequests;
    @track objComments;
    @track objContactId;
 /*
   HandleChange(event){
        if(event.target.name == 'FirstName'){
        this.objFirstName = event.target.value;  
        
        }
        if(event.target.name == 'LastName'){
            this.objLastName = event.target.value;  
            
            }
            
      if(event.target.name == 'Email'){
        this.objEmail = event.target.value;  
      }
 
      if(event.target.name == 'Phone'){
        this.objPhone = event.target.value;  
      }
      if(event.target.name == 'Company'){
        this.objCompany = event.target.value;  
      }
      if(event.target.name == 'Grade'){
       this.objGrade = event.target.value;  
      }
      if(event.target.name == 'Species'){
        this.objSpecies = event.target.value;  
      }
      if(event.target.name == 'Thickness'){
        this.objThickness = event.target.value;  
       }
       if(event.target.name == 'Quantity'){
         this.objQuantity = event.target.value;  
       }
       if(event.target.name == 'UnitofMeasure'){
        this.objUnitofMeasure = event.target.value;  
       }
       if(event.target.name == 'DeliveryDestination'){
         this.objDeliveryDestination = event.target.value;  
       }
       if(event.target.name == 'SpecialRequests'){
        this.objSpecialRequests = event.target.value;  
       }
       if(event.target.name == 'Comments'){
         this.objComments = event.target.value;  
       }
 
 
 }
 */
 HandlefnameChange(event){
  
  this.objFirstName = event.target.value;  
  
  }
  HandlelnameChange(event){
      this.objLastName = event.target.value;  
      
      }
      
 HandleemailChange(event){
  this.objEmail = event.target.value;  
}

HandlephoneChange(event){
  this.objPhone = event.target.value;  
}
HandlecompanyChange(event){
  this.objCompany = event.target.value;  
}
HandlegradeChange(event){
 this.objGrade = event.target.value;  
}
HandlespeciesChange(event){
  this.objSpecies = event.target.value;  
}
HandlethicknessChange(event){
  this.objThickness = event.target.value;  
 }
 HandlequantityChange(event){
   this.objQuantity = event.target.value;  
 }
 HandleunitofmeasureChange(event){
  this.objUnitofMeasure = event.target.value;  
 }
 HandledeliverydestinationChange(event){
   this.objDeliveryDestination = event.target.value;  
 }
 HandlespecialrequestChange(event){
  this.objSpecialRequests = event.target.value;  
 }
 HandlecomentsChange(event){
   this.objComments = event.target.value;  
 }

 
 submitAction(){
  submitContactAction({ FirstName:this.objFirstName, LastName:this.objLastName, Email:this.objEmail, Phone:this.objPhone, Company:this.objCompany, Grade:this.objGrade, Species:this.objSpecies, Thickness:this.objThickness, Quantity:this.objQuantity, UnitofMeasure:this.objUnitofMeasure, DeliveryDestination:this.objDeliveryDestination, SpecialRequests:this.objSpecialRequests, Comments:this.objComments})
    .then(result=>{
       // this.ContactId = result.Id;    
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record created successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);
 
           /*Start Navigation*/
           this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
        attributes: {
                pageName: "testpage"    
            },state: {
              'category': this.objFirstName
             }
        });
         /*End Navigation*/ 
 
    })
    .catch(error =>{
       this.errorMsg=error.message;
       window.console.log(this.error);
    });
 
 }

}