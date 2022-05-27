package IteratorTD;
import java.util.*;
public class Kuyruk <E> Iterable{
    private Vector<E> elemanlar;
    
    private Kuyruk(){
        elemanlar=new Vector<E> (); 
    }
    public void  enqueue(E eleman){
        elemanlar.add(eleman);

    }
    public E dequeue(){
        if(isEmpty()) throw new NoSuchElementException();
        return elemanlar.get(0);
    }
    public boolean isEmpty(){
        if(elemanlar.size()>0)
        return false;
        return true;
    }
    public E getElementAt(int index){

        if(index>elemanlar.size() ) throw new NoSuchElementException();
        return elemanlar.get(index);
    }
    public int size(){
        return elemanlar.size();
    }
}
