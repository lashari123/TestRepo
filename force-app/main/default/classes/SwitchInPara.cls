public class SwitchInPara {
    string DayString=' '; 
    public string getnumbers(Integer getNo){
        
       
        
        Switch on getNo {
            when 0{
               DayString=' Fri' ;
            }
              when 1{
               DayString=' Sat' ;
            }
              when 2{
               DayString=' Sun' ;
            }
              when 3{
               DayString=' Mon' ;
            }
        }
        return DayString;
        
    }

}