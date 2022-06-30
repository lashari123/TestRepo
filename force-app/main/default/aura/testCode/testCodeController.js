({
    onclickhandler: function(cmp,event,helper){
        
        cmp.set("v.condition",true);
    },
    
    CreateMap : function(cmp,event,helper){
        
		        var map=[];
        for(var i=0;i<10;i++){
            map.push({
                key:i,
                value:'map value'+i
            });
            
        }
        cmp.set('v.mapvar',map);
    }
    
    
})