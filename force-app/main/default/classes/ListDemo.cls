public class ListDemo {
    public void myList(){
  
  List<String> StrngList =new List<String>();
          List<String> StrngLst2 =new List<String>();
        Boolean res;
        StrngList.add('Kashmala');
       StrngList.add('Danyal');
       StrngList.add(1,'And');
         StrngLst2=StrngList.clone();
         StrngLst2.add('are looking nice');
        
      
        System.debug('StrngList'+StrngList.remove(1));
         System.debug('StrngList'+StrngList);
        
        
      //  System.debug('mylist'+StrngList);
        
       
    }
}