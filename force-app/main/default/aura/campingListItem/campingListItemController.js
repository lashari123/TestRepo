({
	packItem : function(component, event, helper) {
        var newMessage=event.getSource().get("v.label");
        console.log(" handle click message"+newMessage);
        component.set("v.item.Packed__c",true);
        event.getSource().set("v.disabled",true);
        
	}
})