public with sharing class accountdata {
    public accountdata() {

    }
        @AuraEnabled(cacheable=true)
       public static List<Account> getAccountList(String name) {
           return [SELECT Id, Name,type,rating FROM Account  where name=:name];
       }
       @AuraEnabled
       public static List<Account> getaccount( String name){
        return [SELECT Id, Name,type,rating FROM Account where name=:name];
            
       }  

       @AuraEnabled(cacheable=true)
    public static List<Account> searchAccountNameMethod (String accStrName, String accStrPhone, String accStrWebsite, String accStrIndustry, String accStrDescription){
        String keyNameString = '%' +  accStrName + '%';
        return [Select Id, Name, Phone, Website, Industry, Description From Account Where Name like:keyNameString];
     }  
   }
