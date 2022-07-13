public class csvDownloadCtrl {
    @AuraEnabled
    public static List<Account> getAccounts(){
       return [Select id,name,accountnumber,parent.accountnumber from Account where parent.id!=null and parent.accountnumber!=null];
              
        
    } 
}