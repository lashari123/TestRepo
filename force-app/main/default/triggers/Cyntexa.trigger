trigger Cyntexa on Account (before insert) {
    
    if(Trigger.isBefore && Trigger.isInsert){
    
        
        /*for(Account a = Trigger.New ){
        String[]AccountName=a.Name.split(' ');
        String AdditionWords = AccountName[0]; 
        String ActualWord   =AccountName[1];
        if(ActualWord){
            
    	    }
	    }*/
    }
}