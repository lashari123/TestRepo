trigger myfirsttrigger on Account (before insert, before update, after update) {
    if(trigger.isBefore && trigger.isInsert){
        System.debug('hi i am before insert ');
    }
      if(trigger.isBefore && trigger.isUpdate){
        System.debug('hi i am before update ');
          for(Account acc:Trigger.new){
system.debug('new name'+ acc.Name);
              system.debug('old name'+ Trigger.oldMap.get(acc.Id).name);
             
    }
         
    }
    
       if(trigger.isAfter && trigger.isUpdate){
        System.debug('hi i am after insert ');
    }
}