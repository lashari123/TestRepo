public class OppertunityController {

    public static void updateProfile(List<Id> ListIds){
           List<Opportunity> opps=[SELECT Id, Amount,Profile__c From Opportunity Where Id IN: ListIds];
        for(Opportunity opp: opps){
            
       
            if(opp.Amount<1000){
                opp.Profile__c='Low';
            }else if( opp.Amount>1000){
                
                opp.Profile__c='High';
            }else{
                opp.Profile__c='Medium';
            }
            update opp;
        }
    }
}