public class FFNotSorumlusu extends HarfNotlandirici{
    public String notDondur(int not){
        if(not>=0 && not<41) return "ff";//bensem not dondur değilsem benden sonraki dondursun
        if(sonraki==null) return "bilinmeyen not";
        return sonraki.notDondur(not);
    }

}