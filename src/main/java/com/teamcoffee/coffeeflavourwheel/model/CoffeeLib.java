package com.teamcoffee.coffeeflavourwheel.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Objects;

@Entity
@Table(name = "coffeeLib")
public class CoffeeLib {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate date;
    private String coffeeName;
    private String roaster;
    private String roastColor;
    private String processingMethod;
    private String tastingMethod;
    private String beanType;
    private String userNotes;
//    private ArrayList<Flavor> flavors;

    public CoffeeLib() {}

    public CoffeeLib(LocalDate date, String coffeeName, String roaster, String roastColor, String processingMethod, String tastingMethod, String beanType, String userNotes) {
        this.date = date;
        this.coffeeName = coffeeName;
        this.roaster = roaster;
        this.roastColor = roastColor;
        this.processingMethod = processingMethod;
        this.tastingMethod = tastingMethod;
        this.beanType = beanType;
        this.userNotes = userNotes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCoffeeName() {
        return coffeeName;
    }

    public void setCoffeeName(String coffeeName) {
        this.coffeeName = coffeeName;
    }

    public String getRoaster() {
        return roaster;
    }

    public void setRoaster(String roaster) {
        this.roaster = roaster;
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

    public LocalDate getDate() { return date; }

    public void setDate(LocalDate date) { this.date = date; }

    public String getUserNotes() { return userNotes; }

    public void setUserNotes(String userNotes) { this.userNotes = userNotes; }

//    public ArrayList<Flavor> getFlavors() { return flavors; }
//
//    public void setFlavors(ArrayList<Flavor> flavors) { this.flavors = flavors; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CoffeeLib coffeeLib = (CoffeeLib) o;
        return Objects.equals(id,
                coffeeLib.id) &&
                Objects.equals(coffeeName, coffeeLib.coffeeName) &&
                Objects.equals(roaster, coffeeLib.roaster) &&
                Objects.equals(roastColor, coffeeLib.roastColor) &&
                Objects.equals(processingMethod, coffeeLib.processingMethod) &&
                Objects.equals(tastingMethod, coffeeLib.tastingMethod) &&
                Objects.equals(date, coffeeLib.date) &&
                Objects.equals(beanType, coffeeLib.beanType) &&
                Objects.equals(userNotes, coffeeLib.userNotes);
//                Objects.equals(flavors, coffeeLib.flavors);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, coffeeName, roaster, roastColor, processingMethod, tastingMethod, beanType, userNotes);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Coffee Library{");
        sb.append("id=").append(id);
        sb.append(", date='").append(date).append('\'');
        sb.append(", coffeeName='").append(coffeeName).append('\'');
        sb.append(", roaster='").append(roaster).append('\'');
        sb.append(", roastColor='").append(roastColor).append('\'');
        sb.append(", processingMethod='").append(processingMethod).append('\'');
        sb.append(", tastingMethod='").append(tastingMethod).append('\'');
        sb.append(", beanType='").append(beanType).append('\'');
        sb.append(", userNotes='").append(userNotes).append('\'');
//        sb.append(", flavorList='").append(flavors).append('\'');
        sb.append('}');
        return sb.toString();
    }
}