package classes;

import java.util.ArrayList;

public class ResponseRecord {
    private ArrayList<Double> list;
    private String verdict;

    public ResponseRecord(ArrayList<Double> list, String verdict){
        this.list = list;
        this.verdict = verdict;
    }

    public String getVerdict() {
        return verdict;
    }

    public ArrayList<Double> getList() {
        return list;
    }

    @Override
    public String toString() {
        return "classes.ResponseRecord{" +
                "list=" + list +
                ", verdict='" + verdict + '\'' +
                '}';
    }
}
