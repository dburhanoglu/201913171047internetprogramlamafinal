public class Test {
    Light l =new Light();
    Stereo s=new Stereo();
    TV tv=new TV();

    LightOnCommand lo=new LightOnCommand();
    lo.setLight(l);


    LightOffCommand loff=new LightOffCommand();
    loff.setLight(l);


    TvOnCommand tvon=new TvOnCommand();
    tvon.setTv(tv);

    TvOffCommand tvoff=new TvOffCommand();
    tvoff.setTv(tv);

    
    StereoOnCommand so=new StereotOnCommand();
    so.setStereo(S);


  StereoOffCommand soff=new StereoOffCommand();
    soff.setStereo(s);
        RemoteController rc=new RemoteController();
        rc.SetOnCommand(0,lo);
        rc.SetOffCommand(0,loff);

        rc.SetOnCommand(1,tvon);
        rc.SetOffCommand(1,tvoff);

        rc.SetOnCommand(2,so);
        rc.SetOffCommand(2,soff);

        rc.onButtonPressed(0);
        rc.UndoButtonPressed();
        
        rc.offButtonPressed(2);
        

}
