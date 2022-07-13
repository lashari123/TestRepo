public class CyntexaHelperClass {

    public void CyntexaMethod(List<Account> accList){
        
        for(Account a : accList ){
            String[] AccountName = a.Name.split(' ');
            String Firstword  = AccountName[0]; 
            String SecondWord = AccountName[1];
            if(Firstword.toLowerCase()=='the' || Firstword.toLowerCase()=='a'){
                
                String NameRegex = '^[A-Na-n]';
                Pattern NamePattern = Pattern.compile(NameRegex);
                Matcher NameMatcher = NamePattern.matcher(SecondWord);
                if(NameMatcher.matches()){
                    
                }
            }
	    }
    }
}