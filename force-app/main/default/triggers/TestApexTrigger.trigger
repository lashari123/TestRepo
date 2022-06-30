trigger TestApexTrigger on Account (before insert,before update) {
    if(Trigger.isInsert){
      AccountHandler.beforInsert(Trigger.New) ; 
    }
    else if(Trigger.isUpdate){
        AccountHandler.beforeUpdate(Trigger.New) ; 
    }
}