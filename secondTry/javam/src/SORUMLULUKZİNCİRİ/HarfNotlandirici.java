public abstract class HarfNotlandirici{
    protected HarfNotlandirici sonraki;

    public void setSonraki(HarfNotlandirici sonraki){
   this.sonraki=sonraki;
    }

    public abstract String notDondur(int not);

}