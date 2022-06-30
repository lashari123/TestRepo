public class Challenge1 {
    public static void Challeng(){
final Integer onlyOne=8;
final Integer upToTwo=7;
final Integer MOrdthan3=6;


Integer RoseOrder=3;
Integer ChandlerOrder=1;
Integer JoyOrder=4;

Integer NoOfSlice=0;
Integer RoseHasToPay= (NoOfSlice==1)?onlyOne*RoseOrder:(NoOfSlice<=3?
upToTwo*RoseOrder:MOrdthan3*NoOfSlice);
  
system.debug('Rose has to pay'+RoseHasToPay);
}
}