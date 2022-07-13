trigger deleteChildObj on Account (before delete) {
    
    
    
    //To store parent ids
    list<id> AccountIds=new list<id>();
    for(Account accountVar:trigger.old)
    {
        AccountIds.add(accountVar.id);
    }  
    //Collecting all child records related to Parent records
    list<Prospect__c> listOfProspect=[select id from Prospect__c where Account__c in :AccountIds];
    system.debug('listOfContacts'+listOfProspect);
    //deleting child records
    delete listOfProspect;


}