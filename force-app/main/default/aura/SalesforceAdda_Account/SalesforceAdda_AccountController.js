({
                doInit : function(component, event, helper) {
                              //  helper.getAccontRecord(component); // Calling Helper method
                              
                       var action = component.get("c.getAccountRecord"); //Calling Apex class controller 'getAccountRecord' method

        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            console.log("State>>"+state);
          var result = JSON.stringify(response.getReturnValue());
              console.log("result>>"+response.getReturnValue());
            if (component.isValid() && state === "SUCCESS"){
                component.set("v.accLst", response.getReturnValue());  // Adding values in Aura attribute variable.
                }
        });
        $A.enqueueAction(action);
                }
                
})