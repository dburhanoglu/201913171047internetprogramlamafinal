public class Stereo{
    private int sesSeviyesi;
    public Stereo(){
        sesSeviyesi=0;
    }
    public void on(){
        System.out.println("ses acık");
        sesSeviyesi=1;
    }
     public void off(){
        System.out.println("ses kapalı");
        sesSeviyesi=0;
    }
    public void yuksekSes(){
     
        sesSeviyesi=100;
    }
    
}