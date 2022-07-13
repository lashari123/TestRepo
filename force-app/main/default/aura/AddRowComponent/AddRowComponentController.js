({
	doInit : function(component, event, helper) {
		var rowList=component.get("v.conlist");
        rowList.push({
            'FirstName':'',
            'LastName':'',
            'Email':''
        });
        component.set("v.conlist",rowList);
	},
    AddRow : function(component, event, helper) {
       var rowList=component.get("v.conlist");
        var newRow=new Object();
        rowList.push(newRow);
        component.set("v.conlist",rowList);
        
    },
    handleclick : function(component,event,helper){
         var rowList=component.get("v.conlist");
        var  rowNumber=event.target.getAttribute("id");
        console.log("Row ==>>"+rowNumber);
        rowList.splice(rowNumber,1);
        component.set("v.conlist",rowList);
    },
    
    handlerSave : function(component,event,helper){
        var action=component.get("c.CreateConRecords");
        var   rowList=component.get("v.conlist");
        action.setParams({
            condata:rowList
        });
          action.setCallback(this,function(response){
          var state=response.getState();
               console.log("===>"+state);
              if(state==="SUCCESS"){
                  component.set("v.message","Recored has been saved successfully");
              }
              else if(state==="ERROR"){
                  var error=response.getError();
                  var errorMsg=error[0].message;
                  component.set("v.message",errorMsg);
                  
              }
             
        });
        $A.enqueueAction(action); 
    }
   
})