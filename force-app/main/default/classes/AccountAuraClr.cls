public class AccountAuraClr {

                @AuraEnabled
    public static List<Account> getAccountRecord()
   {
        return new List<Account>([Select id,Name,Phone from Account LIMIT 15 ]);
    }
}