trigger accountOldAndnew on Account (before insert,before update) {
    if(Trigger.isBefore && Trigger.isInsert){
        for(Account acc:Trigger.New){
            system.debug('new account  '+ acc.id);
        
        
          Account accOld=Trigger.oldMap.get(acc.id);
       
                  
                      system.debug('new account '+ acc.Name);
                  system.debug('new account '+ accOld.Name);
            for(Account oldacc:Trigger.old ){
                
                if(acc.id==oldacc.id){
                    
                    system.debug('new account'+acc.id);
                    
                    system.debug('new account'+oldacc.id);
                }
            }
              
          
        }
        
    }
}