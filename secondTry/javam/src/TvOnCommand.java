public class TvOnCommand implements Command{
  
    private Tv tv;
    public void setTv(Tv t){
        tv=t;

    }

public void execute(){
    tv.on();
}
}