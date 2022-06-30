({
	/*callDeleteRecord : function(component, event, helper) {		
        var currentRecordId = component.get("v.view.Id");
           console.log("record id>>"+currentRecordId);
        alert ('Current Record Id ' + currentRecordId + '. Now you could pass the current record Id to server to delete the record.' )*/
    deleteRecord : function(component, event) {
      //  component.set("v.isLoading", true);
        var accountRec = event.getParam('row');        
        var action = component.get("c.delAccount");
        action.setParams({
            "accountRec": accountRec
        });
        action.setCallback(this, function(response) {
            //component.set("v.isLoading", false);            
            if (response.getState() === "SUCCESS" ) {
                var rows = component.get('v.view');
                var rowIndex = rows.indexOf(accountRec);
                rows.splice(rowIndex, 1);
                component.set('v.view', rows);
                this.showToast("Success!","success","The record has been delete successfully.");
            }
            else{
                this.showToast("ERROR","error",JSON.stringify(response.getError())); 
            }
        });
        $A.enqueueAction(action);
    },
    
    showToast:function(title,type,message){
        var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            toastEvent.setParams({"title": title,"type": type,"message": message}).fire();
        }
        else{
            alert(message);
        }
    }, 
    
    
	/*
    callUpdateRecord : function(component, event, helper) {		
        var currentRecordId = component.get("v.view.Id");
     
        /*var currentRecord = component.get("v.view");
        alert ('Current Record Id ' + currentRecordId + ' and Current Record Object is ' + component.get('v.view') +'. Now you could pass the current object to a modal popup and show the fields accordingly to update the record.' )
	
    
        var editRecordEvent = $A.get("e.force:editRecord");
        
        editRecordEvent.setParams({
        
        "recordId": currentRecordId
        
        });
        
        editRecordEvent.fire();
        

    }*/
})