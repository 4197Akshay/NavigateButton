public with sharing class NewRecord {
    public NewRecord() {


    }
    @AuraEnabled
        public static Contact submitContactAction(string FirstName, string LastName, string Email, string Phone,  string Company, integer Grade, string Species, string Thickness, string Quantity,  string UnitofMeasure, string DeliveryDestination,  string SpecialRequests,  string Comments){
            Contact c = new Contact();
            c.FirstName=FirstName;
            c.LastName=LastName;
            c.Email=Email;
            c.Phone=Phone;
            c.Company__c=Company;
            c.Grade__c=Grade;
            c.Species__c=Species;
            c.Thickness__c=Thickness;
            c.Quantity__c=Quantity;
            c.UnitofMeasure__c=UnitofMeasure;
            c.DeliveryDestination__c=DeliveryDestination;
            c.SpecialRequests__c=SpecialRequests;
            c.Comments__c=Comments;
     
            insert c;
            return c;
        }
}
