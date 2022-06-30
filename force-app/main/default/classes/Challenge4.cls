public class Challenge4 {
    public static void challenge(){
        
        
        Integer current;
        Integer previous=1;
        Integer beforePrevious=0;
        Integer i=0;
        system.debug(beforePrevious);
            
            system.debug(previous);
        while(i<18){
            
            
            current=previous+beforePrevious;
            system.debug(current);
            beforePrevious=previous;
            previous=current;
            
            i++;
        }
    }

}