import java.util.Vector;

public class PartyModeOnCommand {
    
 private Stereo s;
 private TV tv;
 private Light light;

public PartyModeOnCommand(){
    s=new Stereo();
    tv=new TV();
    light=new Light();


}

 

public void execute(){
s.on();
s.yuksekSes();
tv.on();
light.on();
}
}
