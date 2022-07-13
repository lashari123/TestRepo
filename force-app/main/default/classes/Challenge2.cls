public class Challenge2 {
    public static void challenge(){
        Integer year=1100;
        
        do{
            
    if(math.mod(year, 4)==0){
            if(math.mod(year, 100)==0){
                
                if(math.mod(year,400)==0){
                    
                    system.debug('it is leap year');
                }else{
                    system.debug('it is leap year');
                }
            }
        }  
            year++;
        }while(year<=2000);
        
    
    }

}