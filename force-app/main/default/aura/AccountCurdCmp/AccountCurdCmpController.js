({
	doInit : function(component, event, helper) {
		var action = component.get("c.getAllRecords"); 
        action.setCallback(this, function(response) 
        {            
            if (response.getState() === "SUCCESS") 
            {
            	component.set('v.manageView',response.getReturnValue());                    
            } 
            else if (response.getState() === "ERROR") 
            {
            	console.log(response.getError());       
            }           
        });
        $A.enqueueAction(action);
	}
})