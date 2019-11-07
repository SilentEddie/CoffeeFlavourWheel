package com.novi.edward.tastecoffee;
import java.util.ArrayList;
/**
 * @author edward idema edwardidema@gmail.com
 */
public class TastedCoffee {
    protected String datetime;
    protected String Name;
    protected ArrayList<Flavor> flavors;
    protected boolean flag;

    public TastedCoffee(String datetime, String Name, FlavorList usedFlavors, ArrayList<Flavor> flavors) {
        this.datetime = datetime;
        this.Name = Name;
        this.flavors = flavors;
    }
    
        
    
}
