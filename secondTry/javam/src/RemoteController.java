public class RemoteController{

    Command[] onSlots;
    Command[] offSlots;
    Command undo;
    int currentOntSlot;
    int currentOfftSlot;
}
public RemoteController(){
    onSlots=new Command[3];
    offSlots=new Command[3];
     currentOntSlot =currentOfftSlot=0;
     for(int i=0;i<3;i++){
         onSlots[i]=new NoCommand();
         offSlots[i]=new NoCommand();

     }
     undo=new NoCommand();
}

public void SetOnCommand(Command co){
    if(currentOntSlot<3){
        onSlots[currentOntSlot++]=co;

    }
 
   /* public void SetOffCommand(Command co){
        if(currentOfftSlot<3){
            offSlots[currentOfftSlot++]=co;
    
        } */
        public void SetOnCommand(int index ,Command co){
            if(index<3){
                onSlots[index]=co;
        
            }
        }
            public void SetOffCommand(int index,Command co){
                if(index<3){
                    offSlots[index]=co;
            
                }
}
public void onButtonPressed(int index){
    if(index<3 && index>-1){
onSlots[index].execute();
undo=onSlots[index];//en son yaptığın islem bu oldugu icin

    }
    


}
public void offButtonPressed(int index){
    if(index<3 && index>-1){
          offSlots[index].execute();
          undo=offSlots[index];
    }
    public void UndoButtonPressed () {
        undo.undo();
        
    }
  






}

