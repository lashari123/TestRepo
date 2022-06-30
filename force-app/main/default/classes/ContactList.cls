public class ContactList {

    @AuraEnabled
    
    public static List<Contact> getContactList(String accountId){
        
        
        List<Contact> listOfContact =new List<Contact>([SELECT Id,Name,Phone,Email FROM Contact WHERE Email !=null AND AccountId =: accountId]);
        
        return listOfContact;
        
    }
}