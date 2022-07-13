public class AccountCLT2 {

                    @AuraEnabled
    public static List<Account> getAccountRecord()
   {
        return [Select id,Name,Phone from Account LIMIT 15 ];
    }
    
     @AuraEnabled
    public static void delAccount(Account accountRec){
        delete accountRec;
    } 
}