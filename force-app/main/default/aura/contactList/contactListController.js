({
	doInit : function(cmp, event, helper) {
        /*step 1*/
		var action=cmp.get("c.getContactList");
    /* optional step 2*/
        action.setParams({
            accountId:cmp.get("v.recordId")
        });
        
      /*  var state=data.getState();
        
        if(state==='SUCCESS'){
            
        }*/
        /*step 4*/
        action.setCallback(this,function(response){
            var resposeData=response.getReturnValue();
            console.log('@@',resposeData)
            cmp.set('v.listcontact',resposeData)
        },'SUCCESS');
        
        /*step 3*/
        $A.enqueueAction(action);
	},
    
    redirect:function(cmp,event,helper){
        var getSource= event.getSource().get('v.value');
     
      
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": getSource,
      "slideDevName": "related"
    });
    navEvt.fire();
}
    
})