public class AccountHandler {
    public static void beforInsert(List<Account> newList){
        
        for (Account acc: newList){
            acc.Description='lashari sahb jo khair';
        }
    }
      public static void beforeUpdate(List<Account> newList){
        
        for (Account acc: newList){
            acc.Description='haq lashari sahb ';
        }
    }
}