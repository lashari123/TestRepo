public class ControllerContact {

    
        @AuraEnabled
    public static List<Contact> CreateConRecords(List<Contact> condata){
        try{
            insert condata;
        }
        catch(Exception e){
            throw new AuraHandledException('enable to insert the record '+e.getMessage());
        }
           return condata;
}
}