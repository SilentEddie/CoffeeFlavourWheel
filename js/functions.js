"use strict";



// FUNCTIONS INNER CIRCLE 1 //
function Sweet() {
    console.log("This is: " + (JSON.stringify(flavours.sweet)))
};

// FUNCTIONS INNER CIRCLE 2 FOR SWEET //

// ######## BROWN SUGAR + DESCRIPTORS ###########

function BrownSugar() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.brownSugar)))
};

function Molasses() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.brownSugar.descriptors.molasses)))
};

function MapleSyrup() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.brownSugar.descriptors.mapleSyrup)))
};

function Caramelized() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.brownSugar.descriptors.caramelized)))
};

function Honey() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.brownSugar.descriptors.honey)))
};

function Vanilla() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.vanilla)))
};

function Vanillin() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.vanillin)))
};

function OverallSweet() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.overallSweet)))
};

function SweetAromatics() {
    console.log("This is: " + (JSON.stringify(flavours.sweet.subFlavours.sweetAromatics)))
};

// ######### FLORAL ##############

function Floral() {
    console.log("This is: " + (JSON.stringify(flavours.floral)))
};

// FUNCTIONS INNER CIRCLE 2 FOR FLORAL //

function BlackTea() {
    console.log("This is: " + (JSON.stringify(flavours.floral.subFlavours.blackTea)))
};

// ########## FLORAL + DESCRIPTORS #################

function Floral_1() {
    console.log("This is: " + (JSON.stringify(flavours.floral.subFlavours.floral)))
};

function Chamomile() {
    console.log("This is: " + (JSON.stringify(flavours.floral.subFlavours.floral.descriptors.chamomile)))
};

function Rose() {
    console.log("This is: " + (JSON.stringify(flavours.floral.subFlavours.floral.descriptors.rose)))
};

function Jasmine() {
    console.log("This is: " + (JSON.stringify(flavours.floral.subFlavours.floral.descriptors.jasmine)))
};



// ######## Sour Fermented #######

function SourFermented() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented)))
};

// ######### SOUR + DESCRIPTORS ###########

function Sour() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour)))
};

function SourAromatics() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour.descriptors.sourAromatics)))
};

function AceticAcid() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour.descriptors.aceticAcid)))
};

function ButyricAcid() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour.descriptors.butyricAcid)))
};

function IsovalericAcid() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour.descriptors.isovalericAcid)))
};

function CitricAcid() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour.descriptors.citricAcid)))
};

function MalicAcid() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.sour.descriptors.malicAcid)))
};


// ###### ALCOHOL FERMENTED + DESCRIPTORS ##########

function AlcoholFermented() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.alcoholFermented)))
};

function Winey() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.alcoholFermented.descriptors.winey)))
};

function Whiskey() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.alcoholFermented.descriptors.whiskey)))
};

function Fermented() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.alcoholFermented.descriptors.fermented)))
};

function OverRipe() {
    console.log("This is: " + (JSON.stringify(flavours.sourFermented.subFlavours.alcoholFermented.descriptors.overRipe)))
};

// ######## Green Vegetative #########

function GreenVegetative() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative)))
};

function OliveOil() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.oliveOil)))
};

function Raw() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.raw)))
};

// ########## GREEN VEGETATIVE + DESCRIPTORS ############

function GreenVegetative_1() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1)))
};

function UnderRipe() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.underRipe)))
};

function PeaPod() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.peaPod)))
};

function Fresh() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.fresh)))
};

function DarkGreen() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.darkGreen)))
};

function Vegetative() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.vegetative)))
};

function HayLike() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.hayLike)))
};

function HerbLike() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.greenVegetative_1.descriptors.herbLike)))
};

function Beany() {
    console.log("This is: " + (JSON.stringify(flavours.greenVegetative.subFlavours.beany)))
};

// ######## This is OTHTER ##########

function Other() {
    console.log("This is: " + (JSON.stringify(flavours.other)))
};

// ####### PAPER MUSTY + DESCRIPTORS ############

function PaperMusty() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty)))
};

function Stale() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.stale)))
};

function CardBoard() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.cardboard)))
};

function Papery() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.papery)))
};

function Woody() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.woody)))
};

function MoldyDamp() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.moldyDamp)))
};

function MustyDusty() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.mustyDusty)))
};

function MustyEarthy() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.mustyEarthy)))
};

function Animalic() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.animalic)))
};

function MeatyBrothy() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.meatyBrothy)))
};

function Phenolic() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.paperMusty.descriptors.phenolic)))
};

// ######### CHEMICAL + DESCRIPTORS ##########

function Chemical() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical)))
};

function Bitter() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical.descriptors.bitter)))
};

function Salty() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical.descriptors.salty)))
};

function Medicinal() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical.descriptors.medicinal)))
};

function Petroleum() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical.descriptors.petroleum)))
};

function Skunky() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical.descriptors.skunky)))
};

function Rubber() {
    console.log("This is: " + (JSON.stringify(flavours.other.subFlavours.chemical.descriptors.rubber)))
};

// ######## THIS IS ROASTED ##########


function Roasted() {
    console.log("This is: " + (JSON.stringify(flavours.roasted)))
};

function PipeTobacco() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.pipeTobacco)))
};

function Tobacco() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.tobacco)))
};

// ######## BURNT + DESCRIPTORS ##########

function Burnt() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.burnt)))
};

function Acrid() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.burnt.descriptors.acrid)))
};

function Ashy() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.burnt.descriptors.ashy)))
};

function Smoky() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.burnt.descriptors.smoky)))
};

function BrownRoast() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.burnt.descriptors.brownRoast)))
};

// ####### CEREAL + DESCRIPTORS ###########

function Cereal() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.cereal)))
};

function Grain() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.cereal.descriptors.grain)))
};

function Malt() {
    console.log("This is: " + (JSON.stringify(flavours.roasted.subFlavours.cereal.descriptors.malt)))
};

// ######### SPICES ###########

function Spices() {
    console.log("This is: " + (JSON.stringify(flavours.spices)))
};

function Pungent() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.pungent)))
};

function Pepper() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.pepper)))
};

// ######## BROWN SPICE + DESCRIPTORS ###########

function BrownSpice() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.brownSpice)))
};

function Anise() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.brownSpice.descriptors.anise)))
};

function Nutmeg() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.brownSpice.descriptors.nutmeg)))
};

function Cinnamon() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.brownSpice.descriptors.cinnamon)))
};

function Clove() {
    console.log("This is: " + (JSON.stringify(flavours.spices.subFlavours.brownSpice.descriptors.clove)))
};

// ########## NUTYY COCOA #############


function NuttyCocoa() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa)))
};

// ####### NUTTY + DESCRIPTORS ###########

function Nutty() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.nutty)))
};

function Peanuts() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.nutty.descriptors.peanuts)))
};

function Hazelnut() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.nutty.descriptors.hazelnut)))
};

function Almond() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.nutty.descriptors.almond)))
};

// ####### COCOA + DESCRIPTORS #############

function Cocoa() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.cocoa)))
};

function Chocolate() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.cocoa.descriptors.chocolate)))
};

function DarkChocolate() {
    console.log("This is: " + (JSON.stringify(flavours.nuttyCocoa.subFlavours.cocoa.descriptors.darkChocolate)))
};

// ######### Fruity ############ //
function Fruity() {
    console.log("This is: " + (JSON.stringify(flavours.fruity)))
};

// ######### BERRY + DESCRIPTORS ############

function Berry() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.berry)))
};

function BlackBerry() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.berry.descriptors.blackberry)))
};

function RaspBerry() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.berry.descriptors.raspberry)))
};

function BlueBerry() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.berry.descriptors.blueberry)))
};

function StrawBerry() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.berry.descriptors.strawberry)))
};

// ####### DRIED FRUIT + DESCRIPTORS #########

function DriedFruit() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.driedFruit)))
};

function Raisin() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.driedFruit.descriptors.raisin)))
};

function Prune() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.driedFruit.descriptors.prune)))
};

// ############ OTHER FRUIT + DESCRIPTORS ###############

function OtherFruit() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit)))
};

function Coconut() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.coconut)))
};

function Cherry() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.cherry)))
};

function Pomegrate() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.pomegranate)))
};

function Pineapple() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.pineapple)))
};

function Grape() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.grape)))
};

function Apple() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.apple)))
};

function Peach() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.peach)))
};

function Pear() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.otherFruit.descriptors.pear)))
};

// ######### CITRUS FRUIT + DESCRIPTORS ###########

function CitrusFruit() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.citrusFruit)))
};

function GrapeFruit() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.citrusFruit.descriptors.grapefruit)))
};

function Orange() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.citrusFruit.descriptors.orange)))
};

function Lemon() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.citrusFruit.descriptors.lemon)))
};

function Lime() {
    console.log("This is: " + (JSON.stringify(flavours.fruity.subFlavours.citrusFruit.descriptors.lime)))
};










//// subFlavours
//
//
//var blackTea = document.getElementById(".inner-1-blackTea");
//var subFlavourFloral = document.getElementById(".inner-1-floral");
//var berry = document.getElementById(".inngetElementByIder-1-berry");
//var driedFruit = document.getElementById(".inner-1-driedFruit");
//var otherFruit = document.getElementById(".inner-1-otherFruit");
//var citrusFruit = document.getElementById(".inner-1-citrusFruit");
//var sour = document.getElementById(".inner-1-sour");
//var alcoholFermented = document.getElementById(".inner-1-alcoholFermented");
//var oliveOil = document.getElementById(".inner-1-oliveOil");
//var raw = document.getElementById(".inner-1-raw");
//var subFlavourGreenVegetative = document.getElementById(".inner-1-greenVegetative");
//var beany = document.getElementById(".inner-1-beany");
//var paperMusty = document.getElementById(".inner-1-paperMusty");
//var chemical = document.getElementById(".inner-1-chemical");
//var pipeTobacco = document.getElementById(".inner-1-pipeTobacco");
//var tobacco = document.getElementById(".inner-1-tobacco");
//var burnt = document.getElementById(".inner-1-burnt");
//var cereal = document.getElementById(".inner-1-cereal");
//var pungent = document.getElementById(".inner-1-pungent");
//var pepper = document.getElementById(".inner-1-pepper");
//var brownSpice = document.getElementById(".inner-1-brownSpice");
//var nutty = document.getElementById(".inner-1-nutty");
//var cocoa = document.getElementById(".inner-1-cocoa");
//var brownSugar = document.getElementById(".inner-1-brownSugar");
//var vanilla = document.getElementById(".inner-1-vanilla");
//var vanillin = document.getElementById(".inner-1-vanillin");
//var overallSweet = document.getElementById(".inner-1-overallSweet");
//var sweetAromatics = document.getElementById(".inner-1-sweetAromatics");
//var subFlavourSourFermented = document.getElementById(".inner-1-sourFermented");