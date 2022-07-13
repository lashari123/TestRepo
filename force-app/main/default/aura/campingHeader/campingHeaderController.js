({
	handleClick : function(component, event, helper) {
		var btnClicked=event.getSource().get("v.value");
        var btnClided2=event.getSource().get("v.label");
       console.log("new message"+btnClicked);
           console.log("new btnClided2 "+btnClided2);
           
        component.set("v.message",btnClicked);
	}
})