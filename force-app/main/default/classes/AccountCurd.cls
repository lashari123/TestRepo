public class AccountCurd {

    	@AuraEnabled
    public static List<Account> getAllRecords()
    {   
        return [select id, Name, Phone from Account  Limit 10];    
    }
}