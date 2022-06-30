({
	handleClick : function(component, event, helper) {
		var btnclicked= event.getSource();
        var btnmessage=btnclicked.get("v.label");
        component.set("v.message",btnmessage);
	}
})