public class LightOnCommand implements Command{
    private Light light;
    public void setLight(light l){
        light =l;

    }

public void execute(){
    light.on();
}
//override
public void undo(){//undoyu burada ornek gosterdi
    light.off();
}
}