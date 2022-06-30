({
	clickCreateItem : function(component, event, helper) {
        if(helper.validateItemForm(component)){
            //create a new item
            var newItem=component.get("v.newItem");
            helper.createItem(component,newItem);
            
        }
	}
})