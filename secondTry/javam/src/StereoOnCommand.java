public class StereoOnCommand implements Command{
    private Stereo s;
    public void setStereo(Stereo s){
   this.s=s;

    }

public void execute(){
  s.on();
}
}