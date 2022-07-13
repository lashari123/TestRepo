public class testBatch implements Database.Batchable<sObject>{

     public Database.QueryLocator start(Database.BatchableContext BC){
      return Database.getQueryLocator('SELECT ContactEmail, Max(ClosedDate) FROM case group by ContactEmail');
       
   }
    public void execute(Database.BatchableContext BC, List<Case> Cases){
     for(Case caseREc : Cases){
      
     	
     }
     update Cases;
    }
    public void finish(Database.BatchableContext BC){
   }
}