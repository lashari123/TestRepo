({
    loadAcctRcrds:function(component,event,helper){
        
       var action = component.get("c.getAccounts");
        action.setCallback(this,function(response){
        var state = response.getState();
            
            
            
            if(state == "SUCCESS"){
                
                component.set("v.AcctLst",response.getReturnValue());
                
            }
            else{
                alert('failed');
                
            }
        });
        $A.enqueueAction(action);      
        
    },
    
    exprtTodysRecrds : function(component, event, helper) {
         var stockData = component.get("v.AcctLst")    
         var csv = helper.convertArrayOfObjectsToCSV(component,stockData);
          if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
         var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self'; // 
          hiddenElement.download = 'ExportData.csv';  // CSV file Name* you can change it.[only name not .csv] 
          document.body.appendChild(hiddenElement); // Required for FireFox browser
          hiddenElement.click(); // using click() js function to download csv file
        
        
    }
})