package com.novi.edward.tastecoffee;
/**
 * @author edward idema edwardidema@gmail.com
 */
public class Main {
    public static void main(String[] args) {
        FlavorList coffeeList = new FlavorList();
        coffeeList.addFlavor("Fruity","#DA1D23",1,0);
        coffeeList.addFlavor("Sour/Fermented","#EAB40C",2,0);
        coffeeList.addFlavor("Green/vegetative","#197A2F",3,0);
        coffeeList.addFlavor("Other","#0AA3B5",4,0);
        coffeeList.addFlavor("Roasted","#C94930",5,0);
        coffeeList.addFlavor("Spices","#AE203E",6,0);
        coffeeList.addFlavor("Nutty/Cocoa","#A97B64",7,0);
        coffeeList.addFlavor("Sweet","#E55831",8,0);
        coffeeList.addFlavor("Floral","#DB0D69",9,0);
        coffeeList.addFlavor("Berry","#DD4C51",10,1);
        coffeeList.addFlavor("Dried fruit","#C94A44",11,1);
        coffeeList.addFlavor("Other Fruit","#F2684C",12,1);
        coffeeList.addFlavor("Citrus Fruit","#F7A129",13,1);
        coffeeList.addFlavor("Sour","#E1C315",14,2);
        coffeeList.addFlavor("Alcohol/Fermented","#B09733",15,2);
        coffeeList.addFlavor("Olive oil","#A2B028",16,3);
        coffeeList.addFlavor("raw","#708933",17,3);
        coffeeList.addFlavor("Green vegetative","#3AA255",18,3);
        coffeeList.addFlavor("beany","#5E9A80",19,3);
        coffeeList.addFlavor("Papery/Musty","#9DB2B7",20,4);
        coffeeList.addFlavor("Chemical","#76C0CB",21,4);
        coffeeList.addFlavor("Pipe tobacco","#CAA465",22,5);
        coffeeList.addFlavor("tobacco","#DFBD7E",23,5);
        coffeeList.addFlavor("Burnt","#BE8663",24,5);
        coffeeList.addFlavor("Cereal","#DDAF61",25,5);
        coffeeList.addFlavor("Pungent","#794652",26,6);
        coffeeList.addFlavor("Pepper","#CC3C42",27,6);
        coffeeList.addFlavor("Brown Spice","#B14D57",28,6);
        coffeeList.addFlavor("Nutty","#C78869",29,7);
        coffeeList.addFlavor("Cocoa","#BB764C",30,7);
        coffeeList.addFlavor("Brown Sugar","#D45A59",31,8);
        coffeeList.addFlavor("Vanilla","#F89A80",32,8);
        coffeeList.addFlavor("Vanillin","#F37674",33,8);
        coffeeList.addFlavor("Overal Sweet","#E75B68",34,8);
        coffeeList.addFlavor("Sweet Aromatics","#D0545F",35,8);
        coffeeList.addFlavor("Black Tea","#975E6D",36,9);
        coffeeList.addFlavor("Floral","#E0719C",37,9);
        coffeeList.addFlavor("Blackberry","#3E0317",38,10);
        coffeeList.addFlavor("Raspberry","#E52968",39,10);
        coffeeList.addFlavor("Blueberry","#6469B0",40,10);
        coffeeList.addFlavor("Strawberry","#EF2D36",41,10);
        coffeeList.addFlavor("Raisin","#B53B54",42,11);
        coffeeList.addFlavor("Prune","#A5446F",43,11);
        coffeeList.addFlavor("Coconut","#D07C36",44,12);
        coffeeList.addFlavor("Cherry","#E73451",45,12);
        coffeeList.addFlavor("Pomegranate","#E65656",46,12);
        coffeeList.addFlavor("Pineapple","#F89A1C",47,12);
        coffeeList.addFlavor("Grape","#AEB92C",48,12);
        coffeeList.addFlavor("Apple","#4EB947",49,12);
        coffeeList.addFlavor("Peach","#F68A5C",50,12);
        coffeeList.addFlavor("Pear","#BAA635",51,12);
        coffeeList.addFlavor("Grapefruit","#F26355",52,13);
        coffeeList.addFlavor("Orange","#E2631E",53,13);
        coffeeList.addFlavor("Lemon","#FDE402",54,13);
        coffeeList.addFlavor("Lime","#7EB138",55,13);
        coffeeList.addFlavor("Sour Aromatics","#9EA718",56,14);
        coffeeList.addFlavor("Acetic Acid","#94A770",57,14);
        coffeeList.addFlavor("Butyric Acid","#D0B34F",58,14);
        coffeeList.addFlavor("Isovaleric Acid","#8EB646",59,14);
        coffeeList.addFlavor("Citric Acid","#FAEF08",60,14);
        coffeeList.addFlavor("Malic Acid","#C1BA09",61,14);
        coffeeList.addFlavor("Winey","#8F1B53",62,15);
        coffeeList.addFlavor("Whiskey","#B34039",63,15);
        coffeeList.addFlavor("Fermented","#BA9232",64,15);
        coffeeList.addFlavor("Overripe","#8B6439",65,15);
        coffeeList.addFlavor("under-ripe","#A2BC2B",68,18);
        coffeeList.addFlavor("Peapod","#62AA3C",69,18);
        coffeeList.addFlavor("Fresh","#03A653",70,18);
        coffeeList.addFlavor("Dark green","#048549",71,18);
        coffeeList.addFlavor("Vegetative","#27B44B",72,18);
        coffeeList.addFlavor("Hay-like","#A3A830",73,18);
        coffeeList.addFlavor("Herb-like","#7AC141",74,18);
        coffeeList.addFlavor("Stale","#8B8C90",76,20);
        coffeeList.addFlavor("Cardboard","#BDB175",77,20);
        coffeeList.addFlavor("Papery","#FEFEF4",78,20);
        coffeeList.addFlavor("Woody","#744F02",79,20);
        coffeeList.addFlavor("Moldy/Damp","#A3A36F",80,20);
        coffeeList.addFlavor("Musty/Dusty","#C9B583",81,20);
        coffeeList.addFlavor("Musty/Earthy","#988847",82,20);
        coffeeList.addFlavor("Animalic","#9D977F",83,20);
        coffeeList.addFlavor("Meaty/Brothy","#CC7B6A",84,20);
        coffeeList.addFlavor("Phenolic","#DB646A",85,20);
        coffeeList.addFlavor("Bitter","#80A89D",86,21);
        coffeeList.addFlavor("Salty","#DEF2FD",87,21);
        coffeeList.addFlavor("Medicinal","#7A9BAE",88,21);
        coffeeList.addFlavor("Petroleum","#039FB8",89,21);
        coffeeList.addFlavor("Skunky","#5E777B",90,21);
        coffeeList.addFlavor("Rubber","#120C0C",91,21);
        coffeeList.addFlavor("Acrid","#B9A449",94,24);
        coffeeList.addFlavor("Ashy","#899893",95,24);
        coffeeList.addFlavor("Smoky","#A1743B",96,24);
        coffeeList.addFlavor("Brown. Roast","#894810",97,24);
        coffeeList.addFlavor("Grain","#B7906F",98,25);
        coffeeList.addFlavor("Malt","#EB9D5E",99,25);
        coffeeList.addFlavor("Anise","#C78935",102,28);
        coffeeList.addFlavor("Nutmeg","#8C292C",103,28);
        coffeeList.addFlavor("Cinnamon","#E5762E",104,28);
        coffeeList.addFlavor("Clove","#A16C5A",105,28);
        coffeeList.addFlavor("Peanuts","#D4AD13",106,29);
        coffeeList.addFlavor("Hazelnut","#9D5433",107,29);
        coffeeList.addFlavor("Almond","#C89F83",108,29);
        coffeeList.addFlavor("Chocolate","#692A19",109,30);
        coffeeList.addFlavor("Dark chocolate","#470603",110,30);
        coffeeList.addFlavor("Molasses","#310C0F",111,31);
        coffeeList.addFlavor("Mapple syrup","#AE341F",112,31);
        coffeeList.addFlavor("Caramelized","#D78823",113,31);
        coffeeList.addFlavor("Honey","#DA5C1F",114,31);
        coffeeList.addFlavor("Chamomile","#F7F1BD",120,37);
        coffeeList.addFlavor("Rose","#EF5A78",121,37);
        coffeeList.addFlavor("Jasmine","#F99E1B",122,37);
        
        String test = "";
        test = coffeeList.getWheelJSON();
        //test = coffeeList.printMainFlavors();
        //test
        
        System.out.println(test);
    }
    

    
    
}
