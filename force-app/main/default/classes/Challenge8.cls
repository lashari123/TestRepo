public class Challenge8 {

    public static void updateAvgCaseResolutionDays(List<Id> accountIds){
        Map<id,Integer> AccountTotalCaseMap=new Map<id,Integer>();
        Map<id,Integer> AccountTotalDaysMap=new Map<id,Integer>();
     
        // retrive all the cases for this account
        // get resolution days for each account (ClosedDate - CreatedDate)
        for(Case caseObj : [SELECT Id, CreatedDate, ClosedDate,AccountId
                             FROM Case
                             WHERE IsClosed=true
                            	AND AccountId =: accountIds]){
                                    
            // check if account id does not have in map if it doesn't have just add it
                                    if(! AccountTotalCaseMap.containsKey(caseObj.AccountId)){
                                       AccountTotalCaseMap.put(caseObj.AccountId,0) ;
                                       AccountTotalDaysMap.put(caseObj.AccountId,0);
                                        
                                    }   
                                 
            // increase number of cases
            Integer totalCases= AccountTotalCaseMap.get(caseObj.AccountId);
            totalCases++;
                         AccountTotalCaseMap.put(caseObj.AccountId, totalCases);         
            // get duration in days and add it to totalDays
            Integer totalDays= AccountTotalDaysMap.get(caseObj.AccountId);
            totalDays += caseObj.CreatedDate.date().daysBetween(caseObj.ClosedDate.date());
                                    AccountTotalDaysMap.put(caseObj.AccountId, totalDays);         
        }
        List<Account> AccountToUpdate=new List<Account>();
        for(Id accountId:AccountTotalCaseMap.keySet()){
               Decimal resolutionDays = AccountTotalDaysMap.get(accountId)/AccountTotalCaseMap.get(accountId);
        // update account object
        AccountToUpdate.add(new Account(Id=accountId, Avg_Case_Resolution_Days__c = resolutionDays)) ;  
        }
   
        update AccountToUpdate;
    }
}