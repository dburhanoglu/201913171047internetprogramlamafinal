public class LightOffCommand implements Command{
    private Light light;
    public void setLight(light l){
        light =l;

    }

public void execute(){
    light.off();
}
}