package com.novi.edward.tastecoffee;
import java.util.ArrayList;

/**
 * @author edward idema edwardidema@gmail.com
 */
public class Flavor {
    protected String name;          //De naam zoals in het wiel beschreven
    protected String color;         //kleurcode
    protected int ID;               //nummer
    protected int parentID;         //nummer van de flavor waar hij onder valt
    protected int ring;             //nummer van de ring, beginnend bij 1
    ArrayList<Flavor> children;     //lijst met alle flavors die onder hem vallen.

    public Flavor(String name, String color, int ID, int parentID) {
        this.name = name;
        this.color = color;
        this.ID = ID;
        this.parentID = parentID;
        this.children = new ArrayList<>();
        
    }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getColor() { return color; }

    public void setColor(String color) { this.color = color; }

    public int getID() { return ID; }

    public void setID(int ID) { this.ID = ID; }

    public int getParentID() { return parentID; }

    public void setParentID(int parent) { this.parentID = parent; }

    public int getRing() { return ring; }

    public void setRing(int ring) { this.ring = ring; }
        
    public int getSize() {
        int result = 0;
        for (Flavor child: children){
            result += child.getSize();
        }
        if (result == 0){return 1;}
        return result;
    }

    public ArrayList<Flavor> getChildren() {
        return children;
    }

    public void setChildren(ArrayList<Flavor> children) {
        for (Flavor child: children){
            child.setRing(this.ring+1);
        }
        this.children = children;
    }



    public boolean matchChild(Flavor lostChild) {
        if (lostChild.getParentID()== this.ID){
            lostChild.setRing(this.ring+1);
            this.children.add(lostChild);
            return true;
        }else {
            for (Flavor child: children){
                if (child.matchChild(lostChild)){
                    return true;
                }
            }
        }
        return false;
    }

     protected String PrintFamily(){
        String result = this.name + "\n";
            for (Flavor child: children){
                result += child.PrintFamily("-");
            }        
        return result;
    }
        
    protected String PrintFamily(String dash){
        String result = dash + this.name + "\n";
            for (Flavor child: children){
                result += child.PrintFamily(dash+"-");
            }        
        return result;
    } 
    
    public String getJSON(int fromStep){
        String result = "{ring:" + ring + ", fromStep:" + fromStep + ", toStep:" +
            (fromStep+getSize()) + ", color:\"" + color +  "\", name:\"" + name +
            "\", id:" + ID + ", parentID:" + parentID + "},\n";
        for (Flavor child: children){
            result += child.getJSON(fromStep);
            fromStep+=child.getSize();
        }
        
        return result;
    }

    public String getJSONFileString(int fromStep){
        String result = "{ring:" + ring + ", fromStep:" + fromStep + ", toStep:" +
            (fromStep+getSize()) + ", color:\"" + color +  "\", name:\"" + name +
            "\", id:" + ID + ", parentID:" + parentID + "},\n";
        for (Flavor child: children){
            result += child.getJSON(fromStep);
            fromStep+=child.getSize();
        }
        
        return result;
    }

    
    
    
    
    
}
