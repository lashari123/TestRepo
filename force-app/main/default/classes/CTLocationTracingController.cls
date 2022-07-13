/**
 * CTLocationTracingController
 * Main controller class for Location_Tracing__c object
 * @author Manish
 */
public with sharing class CTLocationTracingController {

 Public static List<Location_Tracing__c> getVisitors(String locationId){
return[SELECT Visit_Date__c, Location__c, Person__c,Person__r.Token__c,Person__r.Health_Status__c, Name, Id
 FROM Location_Tracing__c
 WHERE ID=: locationId
  ORDER BY Visit_Date__c DESC];

 }

 Public static List<Location_Tracing__c> getLocationsByPersonIds(Set<Id> PersonIds){

    return[SELECT Visit_Date__c, Location__c, Person__c, Id
 FROM Location_Tracing__c
 WHERE Person__c IN: PersonIds
 AND Visit_Date__c= LAST_N_DAYS:10];
 }

 Public static List<Location_Tracing__c> getLocationsByLocationsIds(Set<Id> LocationIds){

    return[SELECT Visit_Date__c, Location__c, Person__c, Id
 FROM Location_Tracing__c
 WHERE Location__c IN: LocationIds
 AND  Person__r.Health_Status__c = 'Green'
 AND Visit_Date__c= LAST_N_DAYS:10];
 }
}