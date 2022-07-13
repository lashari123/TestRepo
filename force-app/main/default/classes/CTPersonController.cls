/**
 * CTPersonController
 * Main controller class for Person__c object
 * @author Manish
 */
public with sharing class CTPersonController {

    /**
     * generate unique token using mobile number
     * use MD5 algorithm to generate one-way hash
     * @param mobile
     * @return string token
     */
    public static String getToken(String mobileNo){
        Blob value = Blob.valueOf(mobileNo);
        Blob hash = Crypto.generateDigest('MD5', value);
        // return encoded string
        return EncodingUtil.base64Encode(hash);
    }

    public static List<Person__c> getRecentHealthChanges(){
   return [SELECT Name, Id, Health_Status__c, Mobile__c, 
   Status_Update_Date__c, Token__c FROM Person__c
    ORDER BY Status_Update_Date__c DESC];
    }

    public static List<Person__c> SearchPeople(String SearchTerm){
        SearchTerm = SearchTerm + '%';
        return [SELECT Name, Id, Health_Status__c, Mobile__c, Status_Update_Date__c, Token__c 
        FROM Person__c WHERE Name
         LIKE :SearchTerm OR Mobile__c
          LIKE:SearchTerm OR Token__c
           LIKE:SearchTerm  
           ORDER BY Status_Update_Date__c DESC];
    }
 public static Person__c getPersonById(String PersonId ){
     List<Person__c> people=[SELECT Name, Id, Health_Status__c, Mobile__c, Status_Update_Date__c, Token__c 
     FROM Person__c WHERE Id=:PersonId ];
     if(people!=null && people.size()>0){
         return people[0];
     }
     return null;
 }

}