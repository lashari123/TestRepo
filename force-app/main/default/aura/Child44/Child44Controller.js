({
	handleChange : function(component, event, helper) {
        
        var cmpEvent=component.getEvent("InputCarryEvent");
        var inputCmp=component.get("v.accName");
      cmpEvent.setParams=({
          userInput:inputCmp
        });
        cmpEvent.fire();
		
	}
})