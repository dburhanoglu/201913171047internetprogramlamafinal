package SORUMLULUKZİNCİRİ;

public class SINAV {
    private HarfNotlandirici notlayıcı;
    public SINAV(){
        FFNotSorumlusu ff=new FFNotSorumlusu();
        FDNotSorumlusu fd=new FDNotSorumlusu();
        AANotSorumlusu aa=new AANotSorumlusu();
        ff.setSonraki(fd);
        fd.setSonraki(aa);
        notlayıcı=ff;
    }
    
public String harfNotuGetir(int not){
return notlayıcı.notDondur(not);
}
}
