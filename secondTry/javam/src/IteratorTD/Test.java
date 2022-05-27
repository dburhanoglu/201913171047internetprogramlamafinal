package IteratorTD;


public class Test {
    public static void main(String[] args) {
        Kuyruk  k= new Kuyruk<Integer>(); 
        k.enqueue(3);
        k.enqueue(5);
        k.enqueue(4);
        k.enqueue(6);

        for(int i=0;i<k.size();i++)
        System.out.print(k.getElementAt(i));
    }

    
}
