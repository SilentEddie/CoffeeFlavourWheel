package com.teamcoffee.coffeeflavourwheel.model;

import java.util.ArrayList;

/**
 * @author edward idema edwardidema@gmail.com
 */
public class FlavorList {
    protected ArrayList<Flavor> mainList;

    public FlavorList() {
        mainList = new ArrayList<>();
    }

    /*
    Als je een flavor toevoegt, zoekt ie zijn kinderen en ouder op.
    kinderen = flavors die onder hem vallen. ouder = flavor waar hij onder valt.
    kinderen die (nog) geen ouder hebben staan in de mainlist.
    Hij zoekt zijn kinderen dus in de mainlist.
    zijn ouder zoekt hij zowel in de mainlist als in het nageslacht van de flavors
    in de mainlist
    */

    public String printMainFlavors(){
        String result ="";
        for (Flavor mainFlavor: mainList){
            result += mainFlavor.getName()+"\n";
        }

        return result;
    }


    public void addFlavor(String name, String color, int ID, int parentID){
        Flavor newFlavor = new Flavor(name, color, ID, parentID);
        newFlavor.setChildren(findChildren(ID));
        findParent(newFlavor);
    }

    public String getFamilies(){
        String result = "Families:\n";
        for(Flavor f: mainList){
            result += f.PrintFamily();
        }
        return result;
    }

    public String getWheelJSON(){
        String result = "ringlist = [";
        int fromStep = 0;
        for (Flavor f: mainList){
            result+= f.getJSON(fromStep);
            fromStep += f.getSize();
        }
        result += "]";
        return result;

    }

    private ArrayList findChildren(int ID) {
        ArrayList<Flavor> result = new ArrayList<>();
        for(int i = 0; i < mainList.size();i++){
            if (mainList.get(i).getParentID()==ID){
                result.add(mainList.get(i));
                mainList.remove(i);
            }
        }
        return result;
    }

    private void findParent(Flavor lostChild){
        if (lostChild.getParentID()==0){
            lostChild.setRing(1);
            mainList.add(lostChild);
        }else{
            boolean found = false;
            for (Flavor f: mainList){
                if (f.matchChild(lostChild)){
                    found = true;
                    break;
                }
            }
            if (!found){
                mainList.add(lostChild);
            }
        }
    }
}
