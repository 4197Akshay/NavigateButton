public with sharing class insertRecord {
    public insertRecord() {

    }

    @AuraEnabled
public static void saveContactRecord(Contact objcontact){
//System.debug('ProId====>'+ProId);
System.debug('objAcc===>'+objcontact);
System.debug('objAcc.Routing_Code__c Fname====>'+objcontact.FirstName);
System.debug('objAcc.Deliver_To_City__c Lname====>'+objcontact.LastName);
System.debug('objAcc.Deliver_To_Street__c Product Id====>'+objcontact.Email);

try{
insert objcontact;
}
catch(Exception ex) {
throw new AuraHandledException(ex.getMessage());
}
}
}
