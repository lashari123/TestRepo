public class OpportunityAndAccount {
    public static void CreateRating(list<Account> newList){
        for(Account acc: newList){
            if(acc.Industry !=null && acc.Industry=='Media'){
                acc.Rating ='Hot';
            }
        }
    }
    public static void CreateOpportunity(list<Account> newList){
        
        list<Opportunity> OpportunityList =new list<Opportunity>();
        
        for(Account acc: newList){
            Opportunity Opp =new Opportunity();
            
            Opp.Name=acc.Name;
            Opp.AccountId=acc.Id;
            Opp.StageName='Prospecting';
            Opp.CloseDate=system.today();
            OpportunityList.add(Opp);
            
            
            
        }
        
        if(!OpportunityList.isEmpty()){
            insert OpportunityList;
        }
    }
    public static void UpdatingMsgDiscription(List<Account> newList,Map<Id,Account> oldMap ){
        
        for(Account acc : newList ){
            if(oldMap !=null && acc.Phone!=oldMap.get(acc.Id).Phone){
                acc.Description='this phone number is modified';
            }
        }
    }
    public static void UdatePhoneOppr(){
        
        
    }
}