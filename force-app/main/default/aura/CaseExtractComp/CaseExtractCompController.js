({
 doInit : function (component, event, helper) {
        var np=component.get("v.navigateParameter");
        component.set("v.pageNumber",1);
        helper.helperMethod(component,np);
     
    },
    handleStatusChange : function (component, event, helper) {
        component.set("v.pageNumber",1);
        helper.helperMethod(component,'initialLoad');
     
    },
 goToNext: function(component, event, helper) {
        var pgNumber=component.get("v.pageNumber");
        pgNumber=pgNumber+1;
        component.set("v.pageNumber",pgNumber);
        component.set("v.navigateParameter",'next');
        var ntType=component.get("v.navigateParameter");
        helper.helperMethod(component,ntType);
    },
    goToPrevious: function(component, event, helper) {
        var pgNumber=component.get("v.pageNumber");
        pgNumber=pgNumber-1;
        component.set("v.pageNumber",pgNumber);
        component.set("v.navigateParameter",'previous');
        var ntType=component.get("v.navigateParameter");
        helper.helperMethod(component,ntType);
    },
    selectAllORDeselectAll: function(component, event, helper){
        var trueFalseCheck=event.getSource().get("v.value");
        var csList=component.get("v.CaseList");
        var pagnitaList=component.get("v.caseListPaginateWise");
        var caseListUpd=[];
        var pagnitaListUpd=[];
        for(var i=0;i<csList.length;i++)
            {
                if(trueFalseCheck==true)
                {
                    csList[i].check=true;
                }
                else
                {
                    csList[i].check=false;
                }
                caseListUpd.push(csList[i]);
            }
        component.set("v.CaseList",caseListUpd);
        for(var i=0;i<pagnitaList.length;i++)
            {
                if(trueFalseCheck==true)
                {
                    pagnitaList[i].check=true;
                }
                else
                {
                    pagnitaList[i].check=false;
                }
                pagnitaListUpd.push(pagnitaList[i]);
            }
             component.set("v.caseListPaginateWise",pagnitaListUpd);
   
    },downloadSelectedCase :function(component, event, helper){
        var allSelectedCase=component.get("v.CaseList");
        var caseListAdd=[];
        for(var i=0;i < allSelectedCase.length;i++)
            {
                if(allSelectedCase[i].check==true)
                {
                 
                    caseListAdd.push(allSelectedCase[i].obj);

                }
             
            }
        component.set("v.finalListToAdd",caseListAdd);
        var finalListToDownload=component.get("v.finalListToAdd");
        var csv=helper.convertArrayOfObjectsToCSV(component,finalListToDownload); 
        if(csv==null)
        {
          return ;
        }                         
        var elementLink=document.createElement('a');
        elementLink.href='data:text/csv;charset=utf-8,'+encodeURI(csv);
        elementLink.target='_self';
        elementLink.download='CaseExportData.csv';
        document.body.appendChild(elementLink);
        elementLink.click();
        $A.get('e.force:refreshView').fire();
     
    }
})


CaseExtractCompHelper.js

({
 helperMethod : function(component,type) {
        if(type=='initialLoad')
        {
        var statusValueSelected=component.get("v.statusValueSelected");
            //alert('statusValueSelected'+statusValueSelected);
        var action=component.get('c.getAllCase');
            action.setParams({
                StatusValue:statusValueSelected
            });
       action.setCallback(this,function(response){   
            var state=response.getState();
            var resultData=response.getReturnValue();
            var recordLength=response.getReturnValue().length;
            component.set("v.totalRecords",recordLength);
            var paginateData=[];
            if(state==="SUCCESS")
            {
              component.set("v.CaseList",resultData);
              for(var i=0;i<5;i++)
                  {
                    if(recordLength > i)
                    {
                        paginateData.push(resultData[i]);
                   
                    }                 
                  }
                  component.set("v.caseListPaginateWise",paginateData);
                  component.set("v.lastPageNumber",Math.ceil(recordLength/5));

            }
     
        });
        $A.enqueueAction(action);
 }
        if(type=='next')
        {
            var pgNumber=component.get("v.pageNumber");
            var limit=5*pgNumber;
            var start=limit-5;
            var paginateData=[];
            var RequestList=[];
            RequestList=component.get("v.CaseList");
            var recordLength=component.get("v.totalRecords");
             for(var i=start;i<limit;i++)
                  {
                    if(recordLength > i)
                    {
                        paginateData.push(RequestList[i]);
                   
                    }                 
                  }
             component.set("v.caseListPaginateWise",paginateData);
        }
        if(type=='previous')
        {
            var pgNumber=component.get("v.pageNumber");
            var limit=5*pgNumber;
            var start=limit-5;
           // alert('limit'+limit);
            var paginateData=[];
            var RequestList=[];
            RequestList=component.get("v.CaseList");
            var recordLength=component.get("v.totalRecords");
             for(var i=start;i<limit;i++)
                  {
                    if(recordLength > i)
                    {
                        paginateData.push(RequestList[i]);
                   
                    }                 
                  }
             component.set("v.caseListPaginateWise",paginateData);
        }
    },
    convertArrayOfObjectsToCSV : function(component,objRecords) {
        var csvStringResult,counter,keys,lineDivider,columnDivider;
        if(objRecords==null || !objRecords.length)
        {
   return null;         
        }
        columnDivider=',';
        lineDivider='\n';
        keys=['CaseNumber','Status','Owner','Account','Origin','Priority','Subject','Testobject1__r'];
        csvStringResult='';
        csvStringResult+=keys.join(columnDivider);
        csvStringResult+=lineDivider;
        for(var i=0;i<objRecords.length;i++)
            {
                counter=0;
                for(var tempKey in keys)
                    {
                        var skey=keys[tempKey];
                         if(counter>0)
                        {
                            csvStringResult+=columnDivider;
                        }
                        // Querying standard related object field
                        if(typeof objRecords[i][skey]==='object' && (skey==='Owner' || skey==='Account')){
                            csvStringResult+='"'+objRecords[i][skey].Name+'"';
                            counter ++;
                        }
                        // Querying custom related object field
                        else if(typeof objRecords[i][skey]==='object' &&  skey==='Testobject1__r'){
                            csvStringResult+='"'+objRecords[i][skey].Status__c+'"';
                            counter ++;
                        }
                        // Querying same object field
                        else{
                            csvStringResult+='"'+objRecords[i][skey]+'"';
                            counter ++;
                        }
                     
                    }
                csvStringResult+=lineDivider;
             
            }
     
        return csvStringResult
    }

})