var clickedElements = []; //TODO <-hier moeten de geselecteerde elementen in
//TODO onderstaande moet ook in JSON file of ini.file oid.
//uiterlijkinstellingen
var radius = [40, 80, 140, 200];
var ringnr = 3;
var rings = [{ radius1: 45, radius2: 115, textpos: 1 }]
var steps = 85;
var circlex = 230;
var circley = 230;
//gedraginstellingen
var parentPartAutoSelect = true;		//hogere smaak gaat mee omhoog
var parentPartAutoDeselect = false; //hogere smaak gaat mee omlaag
var childPartAutoDeselect = true;   //subsmaak gaat mee omlaag
var slowness = 8; //traagheid bij animatie opbouw wiel

var mysvg = document.getElementById("svgC");
/*hier gaan we voor elke ring twee groepen maken
even getallen voor onaangeklikten en oneven voor aangeklikten (met schaduw)
bij klikken springt een stukje van de één naar de ander.
door de volgorde van de groepen, valt schaduw alleen op een grotere ring	*/
for (let i = (ringnr * 2); i > 0; i--) {
    let id = "g" + (i);
    var newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newGroup.setAttribute("id", (id));
    if (i % 2 > 0) {
        newGroup.setAttribute('transform', "scale(1.03), translate(-8,-8)");
        newGroup.setAttribute("filter", "url(#dropshadow)");
    }
    mysvg.appendChild(newGroup);
    mysvg.insertBefore(newGroup, null);

}
var originalsvg = mysvg.innerHTML; //backup maken om snel het wiel te wissen
var ringlist = [{ ring: 1, fromStep: 0, toStep: 18, color: "#DA1D23", name: "Fruity", id: 1, parentID: 0 },
{ ring: 2, fromStep: 0, toStep: 4, color: "#DD4C51", name: "Berry", id: 10, parentID: 1 },
{ ring: 3, fromStep: 0, toStep: 1, color: "#3E0317", name: "Blackberry", id: 38, parentID: 10 },
{ ring: 3, fromStep: 1, toStep: 2, color: "#E52968", name: "Raspberry", id: 39, parentID: 10 },
{ ring: 3, fromStep: 2, toStep: 3, color: "#6469B0", name: "Blueberry", id: 40, parentID: 10 },
{ ring: 3, fromStep: 3, toStep: 4, color: "#EF2D36", name: "Strawberry", id: 41, parentID: 10 },
{ ring: 2, fromStep: 4, toStep: 6, color: "#C94A44", name: "Dried fruit", id: 11, parentID: 1 },
{ ring: 3, fromStep: 4, toStep: 5, color: "#B53B54", name: "Raisin", id: 42, parentID: 11 },
{ ring: 3, fromStep: 5, toStep: 6, color: "#A5446F", name: "Prune", id: 43, parentID: 11 },
{ ring: 2, fromStep: 6, toStep: 14, color: "#F2684C", name: "Other Fruit", id: 12, parentID: 1 },
{ ring: 3, fromStep: 6, toStep: 7, color: "#D07C36", name: "Coconut", id: 44, parentID: 12 },
{ ring: 3, fromStep: 7, toStep: 8, color: "#E73451", name: "Cherry", id: 45, parentID: 12 },
{ ring: 3, fromStep: 8, toStep: 9, color: "#E65656", name: "Pomegranate", id: 46, parentID: 12 },
{ ring: 3, fromStep: 9, toStep: 10, color: "#F89A1C", name: "Pineapple", id: 47, parentID: 12 },
{ ring: 3, fromStep: 10, toStep: 11, color: "#AEB92C", name: "Grape", id: 48, parentID: 12 },
{ ring: 3, fromStep: 11, toStep: 12, color: "#4EB947", name: "Apple", id: 49, parentID: 12 },
{ ring: 3, fromStep: 12, toStep: 13, color: "#F68A5C", name: "Peach", id: 50, parentID: 12 },
{ ring: 3, fromStep: 13, toStep: 14, color: "#BAA635", name: "Pear", id: 51, parentID: 12 },
{ ring: 2, fromStep: 14, toStep: 18, color: "#F7A129", name: "Citrus Fruit", id: 13, parentID: 1 },
{ ring: 3, fromStep: 14, toStep: 15, color: "#F26355", name: "Grapefruit", id: 52, parentID: 13 },
{ ring: 3, fromStep: 15, toStep: 16, color: "#E2631E", name: "Orange", id: 53, parentID: 13 },
{ ring: 3, fromStep: 16, toStep: 17, color: "#FDE402", name: "Lemon", id: 54, parentID: 13 },
{ ring: 3, fromStep: 17, toStep: 18, color: "#7EB138", name: "Lime", id: 55, parentID: 13 },
{ ring: 1, fromStep: 18, toStep: 28, color: "#EAB40C", name: "Sour/Fermented", id: 2, parentID: 0 },
{ ring: 2, fromStep: 18, toStep: 24, color: "#E1C315", name: "Sour", id: 14, parentID: 2 },
{ ring: 3, fromStep: 18, toStep: 19, color: "#9EA718", name: "Sour Aromatics", id: 56, parentID: 14 },
{ ring: 3, fromStep: 19, toStep: 20, color: "#94A770", name: "Acetic Acid", id: 57, parentID: 14 },
{ ring: 3, fromStep: 20, toStep: 21, color: "#D0B34F", name: "Butyric Acid", id: 58, parentID: 14 },
{ ring: 3, fromStep: 21, toStep: 22, color: "#8EB646", name: "Isovaleric Acid", id: 59, parentID: 14 },
{ ring: 3, fromStep: 22, toStep: 23, color: "#FAEF08", name: "Citric Acid", id: 60, parentID: 14 },
{ ring: 3, fromStep: 23, toStep: 24, color: "#C1BA09", name: "Malic Acid", id: 61, parentID: 14 },
{ ring: 2, fromStep: 24, toStep: 28, color: "#B09733", name: "Alcohol/Fermented", id: 15, parentID: 2 },
{ ring: 3, fromStep: 24, toStep: 25, color: "#8F1B53", name: "Winey", id: 62, parentID: 15 },
{ ring: 3, fromStep: 25, toStep: 26, color: "#B34039", name: "Whiskey", id: 63, parentID: 15 },
{ ring: 3, fromStep: 26, toStep: 27, color: "#BA9232", name: "Fermented", id: 64, parentID: 15 },
{ ring: 3, fromStep: 27, toStep: 28, color: "#8B6439", name: "Overripe", id: 65, parentID: 15 },
{ ring: 1, fromStep: 28, toStep: 38, color: "#197A2F", name: "Green/vegetative", id: 3, parentID: 0 },
{ ring: 2, fromStep: 28, toStep: 29, color: "#A2B028", name: "Olive oil", id: 16, parentID: 3 },
{ ring: 2, fromStep: 29, toStep: 30, color: "#708933", name: "Raw", id: 17, parentID: 3 },
{ ring: 2, fromStep: 30, toStep: 37, color: "#3AA255", name: "Green vegetative", id: 18, parentID: 3 },
{ ring: 3, fromStep: 30, toStep: 31, color: "#A2BC2B", name: "under-ripe", id: 68, parentID: 18 },
{ ring: 3, fromStep: 31, toStep: 32, color: "#62AA3C", name: "Peapod", id: 69, parentID: 18 },
{ ring: 3, fromStep: 32, toStep: 33, color: "#03A653", name: "Fresh", id: 70, parentID: 18 },
{ ring: 3, fromStep: 33, toStep: 34, color: "#048549", name: "Dark green", id: 71, parentID: 18 },
{ ring: 3, fromStep: 34, toStep: 35, color: "#27B44B", name: "Vegetative", id: 72, parentID: 18 },
{ ring: 3, fromStep: 35, toStep: 36, color: "#A3A830", name: "Hay-like", id: 73, parentID: 18 },
{ ring: 3, fromStep: 36, toStep: 37, color: "#7AC141", name: "Herb-like", id: 74, parentID: 18 },
{ ring: 2, fromStep: 37, toStep: 38, color: "#5E9A80", name: "Beany", id: 19, parentID: 3 },
{ ring: 1, fromStep: 38, toStep: 54, color: "#0AA3B5", name: "Other", id: 4, parentID: 0 },
{ ring: 2, fromStep: 38, toStep: 48, color: "#9DB2B7", name: "Papery/Musty", id: 20, parentID: 4 },
{ ring: 3, fromStep: 38, toStep: 39, color: "#8B8C90", name: "Stale", id: 76, parentID: 20 },
{ ring: 3, fromStep: 39, toStep: 40, color: "#BDB175", name: "Cardboard", id: 77, parentID: 20 },
{ ring: 3, fromStep: 40, toStep: 41, color: "#FEFEF4", name: "Papery", id: 78, parentID: 20 },
{ ring: 3, fromStep: 41, toStep: 42, color: "#744F02", name: "Woody", id: 79, parentID: 20 },
{ ring: 3, fromStep: 42, toStep: 43, color: "#A3A36F", name: "Moldy/Damp", id: 80, parentID: 20 },
{ ring: 3, fromStep: 43, toStep: 44, color: "#C9B583", name: "Musty/Dusty", id: 81, parentID: 20 },
{ ring: 3, fromStep: 44, toStep: 45, color: "#988847", name: "Musty/Earthy", id: 82, parentID: 20 },
{ ring: 3, fromStep: 45, toStep: 46, color: "#9D977F", name: "Animalic", id: 83, parentID: 20 },
{ ring: 3, fromStep: 46, toStep: 47, color: "#CC7B6A", name: "Meaty/Brothy", id: 84, parentID: 20 },
{ ring: 3, fromStep: 47, toStep: 48, color: "#DB646A", name: "Phenolic", id: 85, parentID: 20 },
{ ring: 2, fromStep: 48, toStep: 54, color: "#76C0CB", name: "Chemical", id: 21, parentID: 4 },
{ ring: 3, fromStep: 48, toStep: 49, color: "#80A89D", name: "Bitter", id: 86, parentID: 21 },
{ ring: 3, fromStep: 49, toStep: 50, color: "#DEF2FD", name: "Salty", id: 87, parentID: 21 },
{ ring: 3, fromStep: 50, toStep: 51, color: "#7A9BAE", name: "Medicinal", id: 88, parentID: 21 },
{ ring: 3, fromStep: 51, toStep: 52, color: "#039FB8", name: "Petroleum", id: 89, parentID: 21 },
{ ring: 3, fromStep: 52, toStep: 53, color: "#5E777B", name: "Skunky", id: 90, parentID: 21 },
{ ring: 3, fromStep: 53, toStep: 54, color: "#120C0C", name: "Rubber", id: 91, parentID: 21 },
{ ring: 1, fromStep: 54, toStep: 62, color: "#C94930", name: "Roasted", id: 5, parentID: 0 },
{ ring: 2, fromStep: 54, toStep: 55, color: "#CAA465", name: "Pipe tobacco", id: 22, parentID: 5 },
{ ring: 2, fromStep: 55, toStep: 56, color: "#DFBD7E", name: "Tobacco", id: 23, parentID: 5 },
{ ring: 2, fromStep: 56, toStep: 60, color: "#BE8663", name: "Burnt", id: 24, parentID: 5 },
{ ring: 3, fromStep: 56, toStep: 57, color: "#B9A449", name: "Acrid", id: 94, parentID: 24 },
{ ring: 3, fromStep: 57, toStep: 58, color: "#899893", name: "Ashy", id: 95, parentID: 24 },
{ ring: 3, fromStep: 58, toStep: 59, color: "#A1743B", name: "Smoky", id: 96, parentID: 24 },
{ ring: 3, fromStep: 59, toStep: 60, color: "#894810", name: "Brown, Roast", id: 97, parentID: 24 },
{ ring: 2, fromStep: 60, toStep: 62, color: "#DDAF61", name: "Cereal", id: 25, parentID: 5 },
{ ring: 3, fromStep: 60, toStep: 61, color: "#B7906F", name: "Grain", id: 98, parentID: 25 },
{ ring: 3, fromStep: 61, toStep: 62, color: "#EB9D5E", name: "Malt", id: 99, parentID: 25 },
{ ring: 1, fromStep: 62, toStep: 68, color: "#AE203E", name: "Spices", id: 6, parentID: 0 },
{ ring: 2, fromStep: 62, toStep: 63, color: "#794652", name: "Pungent", id: 26, parentID: 6 },
{ ring: 2, fromStep: 63, toStep: 64, color: "#CC3C42", name: "Pepper", id: 27, parentID: 6 },
{ ring: 2, fromStep: 64, toStep: 68, color: "#B14D57", name: "Brown Spice", id: 28, parentID: 6 },
{ ring: 3, fromStep: 64, toStep: 65, color: "#C78935", name: "Anise", id: 102, parentID: 28 },
{ ring: 3, fromStep: 65, toStep: 66, color: "#8C292C", name: "Nutmeg", id: 103, parentID: 28 },
{ ring: 3, fromStep: 66, toStep: 67, color: "#E5762E", name: "Cinnamon", id: 104, parentID: 28 },
{ ring: 3, fromStep: 67, toStep: 68, color: "#A16C5A", name: "Clove", id: 105, parentID: 28 },
{ ring: 1, fromStep: 68, toStep: 73, color: "#A97B64", name: "Nutty/Cocoa", id: 7, parentID: 0 },
{ ring: 2, fromStep: 68, toStep: 71, color: "#C78869", name: "Nutty", id: 29, parentID: 7 },
{ ring: 3, fromStep: 68, toStep: 69, color: "#D4AD13", name: "Peanuts", id: 106, parentID: 29 },
{ ring: 3, fromStep: 69, toStep: 70, color: "#9D5433", name: "Hazelnut", id: 107, parentID: 29 },
{ ring: 3, fromStep: 70, toStep: 71, color: "#C89F83", name: "Almond", id: 108, parentID: 29 },
{ ring: 2, fromStep: 71, toStep: 73, color: "#BB764C", name: "Cocoa", id: 30, parentID: 7 },
{ ring: 3, fromStep: 71, toStep: 72, color: "#692A19", name: "Chocolate", id: 109, parentID: 30 },
{ ring: 3, fromStep: 72, toStep: 73, color: "#470603", name: "Dark chocolate", id: 110, parentID: 30 },
{ ring: 1, fromStep: 73, toStep: 81, color: "#E55831", name: "Sweet", id: 8, parentID: 0 },
{ ring: 2, fromStep: 73, toStep: 77, color: "#D45A59", name: "Brown Sugar", id: 31, parentID: 8 },
{ ring: 3, fromStep: 73, toStep: 74, color: "#310C0F", name: "Molasses", id: 111, parentID: 31 },
{ ring: 3, fromStep: 74, toStep: 75, color: "#AE341F", name: "Mapple syrup", id: 112, parentID: 31 },
{ ring: 3, fromStep: 75, toStep: 76, color: "#D78823", name: "Caramelized", id: 113, parentID: 31 },
{ ring: 3, fromStep: 76, toStep: 77, color: "#DA5C1F", name: "Honey", id: 114, parentID: 31 },
{ ring: 2, fromStep: 77, toStep: 78, color: "#F89A80", name: "Vanilla", id: 32, parentID: 8 },
{ ring: 2, fromStep: 78, toStep: 79, color: "#F37674", name: "Vanillin", id: 33, parentID: 8 },
{ ring: 2, fromStep: 79, toStep: 80, color: "#E75B68", name: "Overal Sweet", id: 34, parentID: 8 },
{ ring: 2, fromStep: 80, toStep: 81, color: "#D0545F", name: "Sweet Aromatics", id: 35, parentID: 8 },
{ ring: 1, fromStep: 81, toStep: 85, color: "#DB0D69", name: "Floral", id: 9, parentID: 0 },
{ ring: 2, fromStep: 81, toStep: 82, color: "#975E6D", name: "Black tea", id: 36, parentID: 9 },
{ ring: 2, fromStep: 82, toStep: 85, color: "#E0719C", name: "Floral", id: 37, parentID: 9 },
{ ring: 3, fromStep: 82, toStep: 83, color: "#F38D17", name: "Chamomile", id: 120, parentID: 37 },
{ ring: 3, fromStep: 83, toStep: 84, color: "#EF5A78", name: "Rose", id: 121, parentID: 37 },
{ ring: 3, fromStep: 84, toStep: 85, color: "#F2F0B0", name: "Jasmine", id: 122, parentID: 37 },
];

//backup HTML in SVG terugzetten = leegmaken en dan opnieuw tekenen
function resetWheel() {
    mysvg.innerHTML = originalsvg;
    drawWheel();
}

//als je een part aanklikt, kijkt ie of ie (on)geselecteerd moet worden
function clickAction(part) {
    let groupNr = getGroupNumber(part);
    if (groupNr % 2 > 0) {
        groupNr += 1;
    } else {
        groupNr -= 1;
    }
    flipPart(part, groupNr);
}

//voert de switch tussen geselecteerd en ongeselecteerd uit
function flipPart(part, groupNr) {
    var ringGroupID = ("g" + (groupNr));
    document.getElementById(ringGroupID).appendChild(part);
    flipParentPart(part, groupNr);
    flipChildren(part, groupNr);
}

function flipParentPart(part, groupNr) {
    var flipParent = false;
    //heb ik een parent?:
    if (groupNr > 2) {
        flipParent = true;
        var parentPartID = getParentPartID(part.id);
        //ga ik naar ongeselecteerd? zoek dan broertjes(parts):
        if ((groupNr % 2 == 0) && parentPartAutoDeselect) {
            var siblings = ringlist.filter(function (listpart) {
                return listpart.parentID == parentPartID;
            });
            //is er een broerje geselecteerd? dan blijft papaPart geselecteerd:
            siblings.forEach(function (sibling) {
                let siblingElement = document.getElementById(sibling.id)
                if (getGroupNumber(siblingElement) == groupNr - 1) {
                    flipParent = false;
                }
            });
        } else {
            flipParent = ((groupNr % 2 > 0) && parentPartAutoSelect);
        }
    }

    //Papa ook aanpassen
    if (flipParent) {
        var parentPart = document.getElementById(parentPartID);
        flipPart(parentPart, groupNr - 2);
    }
}

function flipChildren(part, groupNr) {
    if (childPartAutoDeselect && groupNr < ((ringnr * 2) - 1) && (groupNr % 2 == 0)) {
        var children = ringlist.filter(function (listpart) {
            return listpart.parentID == part.id;
        });
        children.forEach(function (child) {

            let childElement = document.getElementById(child.id);
            if (getGroupNumber(childElement) == groupNr + 1) {
                flipPart(childElement, groupNr + 2);
            }
        });

    }
}

function getGroupNumber(part) {
    return parseInt((part.parentNode.id).replace("g", ""));
}

//zoekt in ringlist naar ID van Flavor waar hij onder valt
function getParentPartID(partID) {
    var found = ringlist.find(function (listpart) {
        return listpart.id == partID;
    });
    return found.parentID;
}

//tekent het wiel adhv de lijst
function drawWheel() {
    for (let i = 0; i < ringlist.length; i++) {
        if (slowness > 0) { //langzaam opbouwen
            var testa = setTimeout(function () {
                drawPart(ringlist[i].ring,
                    ringlist[i].fromStep, ringlist[i].toStep, ringlist[i].color,
                    ringlist[i].name, ringlist[i].id);
            }, (slowness * i));
        } else {
            drawPart(ringlist[i].ring,
                ringlist[i].fromStep, ringlist[i].toStep, ringlist[i].color,
                ringlist[i].name, ringlist[i].id);
        }
    }
}

//tekent een partje
function drawPart(ring, fromStep, toStep, color, name, id) {
    //wiskundige berekeningen voor cirkelbogen tbv path
    var rInner = radius[ring - 1];
    var rOuter = radius[ring];
    var fromradial = (fromStep / steps) * 2 * Math.PI;
    var toradial = (toStep / steps) * 2 * Math.PI;
    var x1 = (circlex + (Math.sin(fromradial) * rInner));
    var y1 = (circley - (Math.cos(fromradial) * rInner));
    var x2 = (circlex + (Math.sin(fromradial) * rOuter));
    var y2 = (circley - (Math.cos(fromradial) * rOuter));
    var x3 = (circlex + (Math.sin(toradial) * rInner));
    var y3 = (circley - (Math.cos(toradial) * rInner));
    var x4 = (circlex + (Math.sin(toradial) * rOuter));
    var y4 = (circley - (Math.cos(toradial) * rOuter));
    var xText = (circlex + rInner);
    var yText = circley;
    var pathString = "M " + x1 + " " + y1 + "L " + x2 + " " + y2 + " A " + rOuter +
        " " + rOuter + " 1 0 1 " + x4 + " " + y4 + "L " + x3 + " " + y3 + "A " + rInner + " " +
        rInner + " 0 0 0 " + x1 + " " + y1;

    var newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    newPath.setAttribute("d", pathString);

    var newText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    newText.setAttribute("x", circlex);
    newText.setAttribute("y", circley);
    var angle = (((fromStep + toStep) / steps) * 180) - 89.1;
    var textAngle = angle;
    if (angle > 90) {
        textAngle = angle - 1.7;
    }

    var textX = rInner + 8 + ring;
    var transformString = "rotate(" + textAngle + " " + circlex + " " + circley + "),";
    transformString += "translate(" + textX + ")";
    //nog een keer draaien voor tekst in binnenring
    if (ring == 1) {
        transformString += "translate(15)";
        if (angle > 0 && angle < 180) {
            transformString += "rotate(-90 " + circlex + " " + circley + ")";
        }
        if (angle > 180 || angle < 0) {
            transformString += "rotate(-270 " + circlex + " " + circley + ")";
        }
        newText.setAttribute("text-anchor", "middle");
        //name = "test"+angle;
        //afbreken van namen met /
        var division = name.indexOf("/");
        if (division == -1) {
            newText.innerHTML = name;
        } else {
            var namepart1 = name.substring(0, division + 1);
            newText.innerHTML = namepart1;
            // console.log(namepart1);
            var newSpan = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
            newSpan.innerHTML = name.substring(division + 1, name.length);
            newSpan.setAttribute("x", circlex);
            newSpan.setAttribute("dy", "6");

            newText.appendChild(newSpan);
        }

    } else {
        //niet op zn kop voor buitenste ringen
        if (angle > 90) {
            newText.setAttribute("text-anchor", "end");
            transformString += "rotate(180 " + circlex + " " + circley + ")";
        } newText.innerHTML = name;
    }
    newText.setAttribute('transform', transformString);
    newText.style.strokeWidth = "0.1px";
    newText.style.fill = "white";

    var newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newGroup.setAttribute("id", ("" + id));
    newGroup.setAttribute("class", "slice");
    newGroup.setAttribute("onclick", "clickAction(this)");
    newGroup.style.stroke = "white";
    newGroup.style.fill = color;
    newPath.style.strokeWidth = "1px";
    newGroup.appendChild(newPath);
    newGroup.appendChild(newText);

    //bepalen in welke ringgroup dit moet
    var parentGroupID = ("g" + (ring * 2));
    document.getElementById(parentGroupID).appendChild(newGroup);


}

resetWheel();