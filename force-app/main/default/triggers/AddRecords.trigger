trigger AddRecords on Account (before insert) {
    for(Account acc :Trigger.New){
        acc.Description='Test Name';
    }
}