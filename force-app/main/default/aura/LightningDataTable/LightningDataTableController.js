({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Id', fieldName:'Id',sortable:true,type:'text', initialWidth: 300},
            {label: 'Name', fieldName:'Name',sortable:true,type:'text', initialWidth: 400},
            {label: 'Phone', fieldName:'Phone',sortable:true,type:'text', initialWidth: 300},
            {label: 'Created Date', fieldName:'CreatedDate',sortable:true,type:'text', initialWidth: 400}
        ]);
        helper.getAccounts(component, helper);
    },
    updateSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
    /*
    searchTable: function(cmp, event, helper){
        var allRecords =cmp.get("v.allData");
        var searchFilter=event.getSource().get("v.value").toUpperCase();
        var tempArr=[];
        var i;
        for(i=0; i<allRecords.length;i++){
            if(allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1)
              
              {
                tempArr.push(allRecords[i])
            }  
        }*/
     searchTable: function(cmp, event, helper){
         var allRecord =cmp.get("v.allData");
         var searchFilter=event.getSource().get("v.value").toUpperCase();
         
          var tempArr=[];
          var i;
         for(i=0; i<allRecord.length;i++){
             console.log("===>"+ allRecord[i].Name.toUpperCase().indexOf(searchFilter));

             if(allRecord[i].Name && allRecord[i].Name.toUpperCase().indexOf(searchFilter) !=-1){
                 console.log("search"+searchFilter);
                 //console.log("===>"+ allRecord[i].Name.toUpperCase().indexOf(searchFilter));
                 tempArr.push(allRecord[i]);
                 console.log("temp==>>"+ tempArr.push(allRecord[i]));
             }
         }
            cmp.set("v.recordList",tempArr); 
     }
    
   
        
    
    
})