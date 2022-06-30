trigger TestApexTrigger2 on Account (before insert) {
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            ApexTriggerTest2.beforeInsert(Trigger.New);
        }
    }
}