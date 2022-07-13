public class Challenge3 {
    public static void challenge(){
        integer no=1;


do{
       if(math.mod(no,3)==0 && math.mod(no,5)==0){
        system.debug('fizbuzz'); 
    }
    
   else if(math.mod(no,3)==0){
        
        system.debug('fizz');
    }
     else if(math.mod(no,5)==0){
        system.debug('buzz'); 
    }
   
    system.debug(no);
no++;    
}while(
no<=100
);
        
        
    }
}