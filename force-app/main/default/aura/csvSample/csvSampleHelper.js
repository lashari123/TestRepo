({
        
    convertArrayOfObjectsToCSV : function(component,objectRecords){
        // declare variables
        var csvStringResult, counter, keys, columnDivider, lineDivider,parentKey;
       
        // check if "objectRecords" parameter is null, then return from function
        if (objectRecords == null || !objectRecords.length) {
            return null;
         }
        // store ,[comma] in columnDivider variabel for sparate CSV values and 
        // for start next line use '\n' [new line] in lineDivider varaible  
        columnDivider = ',';
        lineDivider =  '\n';
 
        // in the keys valirable store fields API Names as a key 
        // this labels use in CSV file header  
        keys = ['Name','AccountNumber','Id','Parent' ];
        //parentKey=['AccountNumber'];
        
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
 
        for(var i=0; i < objectRecords.length; i++){   
            counter = 0;
           
             for(var sTempkey in keys) {
                var skey = keys[sTempkey] ; 
                 
                /* if(skey=='Parent'){
                     for(var pTempkey in parentKey){
                         csvStringResult += '"'+ objectRecords[i][skey][pTempkey]+'"';                       
                         
                     }    
                     
                     
                 }*/
                
 
              // add , [comma] after every String value,. [except first]
                  if(counter > 0){ 
                      csvStringResult += columnDivider; 
                   }   
               
               csvStringResult += '"'+ objectRecords[i][skey]+'"'; 
               
                /* if(csvStringResult.includes("Parent")){
                     for(var sTemp in parentKey){
                         var orgnKey = parentKey[sTemp];        
                        csvStringResult += '"'+ objectRecords[i][skey][orgnKey]+'"'; 
                         
                     }
                     
                 } */ 
                 
                 
               
               counter++;
             
             } // inner for loop close     
             csvStringResult += lineDivider;
          }// outer main for loop close 
       
       // return the CSV formate String 
        return csvStringResult;        
    },

})