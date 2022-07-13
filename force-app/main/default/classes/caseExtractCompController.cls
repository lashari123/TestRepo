public class caseExtractCompController {
 @AuraEnabled
    public static list<wrapperClass> getAllCase(String StatusValue) {
        string caseStatus=StatusValue;
        list<wrapperClass> wrapperList=new list<wrapperClass>();
          for(Case req:[Select id, CaseNumber, Status,Origin,Priority,Status__c,Account.Name,Subject from Case where Status=:caseStatus])
            {
              wrapperList.add(new wrapperClass(false,req));
            }
        //wrapperClass wObj = new wrapperClass(false, conList);
        return wrapperList;
    }
 
    public class wrapperClass {
        @AuraEnabled
        public boolean check {
            get;
            set;
        }
        @AuraEnabled
        public Case obj{
            get;
            set;
        }
        public wrapperClass(boolean check, Case obj) {
            this.check = check;
            this.obj = obj;

        }


    }

}