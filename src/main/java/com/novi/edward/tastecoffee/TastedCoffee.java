package com.novi.edward.tastecoffee;

import java.util.ArrayList;

/**
 * @author edward idema edwardidema@gmail.com
 */
public class TastedCoffee {
    protected String datetime;
    protected String Name;
    protected String Roaster;
    protected String roastColor;
    protected String processingMethod;
    protected String tastingMethod; // espresso/filter/cupping
    protected String beanType; // Arabica/Robusta
    protected String UserNotes; // opmerking
    protected ArrayList<Flavor> flavors;
    protected boolean flag;

    public TastedCoffee(String datetime, String name, String roaster, String roastColor, String processingMethod,
            String tastingMethod, String beanType, String userNotes, ArrayList<Flavor> flavors, boolean flag) {
        this.datetime = datetime;
        this.Name = name;
        this.Roaster = roaster;
        this.roastColor = roastColor;
        this.processingMethod = processingMethod;
        this.tastingMethod = tastingMethod;
        this.beanType = beanType;
        this.UserNotes = userNotes;
        this.flavors = flavors;
        this.flag = flag;

    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getRoaster() {
        return Roaster;
    }

    public void setRoaster(String roaster) {
        Roaster = roaster;
    }

    public String getRoastColor() {
        return roastColor;
    }

    public void setRoastColor(String roastColor) {
        this.roastColor = roastColor;
    }

    public String getProcessingMethod() {
        return processingMethod;
    }

    public void setProcessingMethod(String processingMethod) {
        this.processingMethod = processingMethod;
    }

    public String getTastingMethod() {
        return tastingMethod;
    }

    public void setTastingMethod(String tastingMethod) {
        this.tastingMethod = tastingMethod;
    }

    public String getBeanType() {
        return beanType;
    }

    public void setBeanType(String beanType) {
        this.beanType = beanType;
    }

    public String getUserNotes() {
        return UserNotes;
    }

    public void setUserNotes(String userNotes) {
        UserNotes = userNotes;
    }

    public ArrayList<Flavor> getFlavors() {
        return flavors;
    }

    public void setFlavors(ArrayList<Flavor> flavors) {
        this.flavors = flavors;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

}
