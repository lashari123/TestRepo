trigger AccountAndOpportunitytrigger on Account (before insert , after insert,before update , after update) {

    if(Trigger.isInsert){
        
        
        if(Trigger.isBefore){
            OpportunityAndAccount.CreateRating(Trigger.new);
        }
        
       else if(Trigger.isAfter){
            OpportunityAndAccount.CreateOpportunity(Trigger.new);
        }
        
    }
    
        if(Trigger.isUpdate){
        
        
        if(Trigger.isBefore){
            OpportunityAndAccount.UpdatingMsgDiscription(Trigger.new,Trigger.oldMap);
        }
        
       else if(Trigger.isAfter){
           // OpportunityAndAccount.UdatePhoneOppr(Trigger.new);
        }
        
    }
    
    
    
}