public class dynamicSearchTable {

    public static List<Account> DisplayAccount(String searchkey){
        List<Account> returnList=new  List<Account>();
        String searchWord='%' +searchkey+ '%';
        system.debug('@@@@ searchInput@@@' +searchkey);
        if(!String.isBlank(searchkey)){
            for(Account acc:[SELECT id,Name,Phone from Account Where Name like:searchWord]){
                
               returnList.add(acc);
            }
        }
        return returnList;
    }
}