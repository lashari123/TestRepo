({
	/*getLabel : function(component, event, helper) {
		var myLabel =component.get("v.value");
        console.log("@@==>>",myLabel);
        
        component.set("v.buttonLabel",myLabel);    
	}*/
    
    
  /*  doclick : function(cmp , event , helper){
       alert(cmp.isValid());
         alert(cmp.getName());
        alert(cmp.get("v.whom"));
        cmp.set('v.whom','welcome guys');
        var getcmp=cmp.find("getInput");
        alert(getcmp.get("v.value"));
     getcmp.set("v.value",44);
      
        
       
    }*/
    doAdd :function(cmp,event,helper){
        var inpt1= cmp.get("v.Input1");
        var inpt2= cmp.get("v.Input2");
     //   alert( parseInt(inpt1) + parseInt(inpt2)); 
        cmp.set("v.output",parseInt(inpt1) + parseInt(inpt2));   
    },
    
      doSub :function(cmp,event,helper){
        var inpt1= cmp.get("v.Input1");
        var inpt2= cmp.get("v.Input2");
       cmp.set("v.output",parseInt(inpt1) - parseInt(inpt2));  
    },
   doMul :function(cmp,event,helper){
        var inpt1= cmp.get("v.Input1");
        var inpt2= cmp.get("v.Input2");
         cmp.set("v.output",parseInt(inpt1) * parseInt(inpt2));  
    },
  doDiv :function(cmp,event,helper){
        var inpt1= cmp.get("v.Input1");
        var inpt2= cmp.get("v.Input2");
        cmp.set("v.output",parseInt(inpt1) / parseInt(inpt2));  
    }
    
})