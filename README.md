## Korte Inhoud
Een functie waarbij je over een foto heen kan hoveren en op die hover een ander foto ziet.

## Code Voorbeeld
De achtergrond foto en de bovenste foto kun je zelf gemakkelijk aanwijzen via de css. Bij de classes "boven" en "onder" zie je een linkje naar de img en die kun je aanpassen. Verder kun je bij class "boven" de pixels aanpassen van het rondje. Je kunt het kleiner of groter maken, je hoeft alleen de width en length te veranderen. Ook kun je de positie van de bovenste foto en de onderste foto aanpassen bij library.js, alleen deze is zo gemaakt dat het perfect klopt bij deze foto's. Dus je moet zelf kijken hoe je deze wilt aanpassen op je eigen foto's. Dit kun je veranderen door de cijfers "135" en "325" te veranderen bij relativeX en relativeY

## Bijvoorbeeld:

.onder {
    top:105px;
    left:275px;
    position: absolute;
	display: block;
	background-image: url("images/cartoon2.png");
}

.boven {
    top:50px;
    left:75px;
    position: absolute;
    width:100px;
    height:100px;
	background-image: url("images/cartoon21.png");
	border-radius: 50%;
	background-repeat: no-repeat;

Je kunt hierboven de classes van de plaatjes zien. Je kunt de grootte van het rondje veranderen door width en heigth bij ".boven" aan te passen.

Je kunt je eigen plaatjes toevoegen door background-image te veranderen naar je eigen image. 

img.style.backgroundPosition = "" + (325-relativeX) + "px " + (155-relativeY) + "px";

Bij de backgroundPosition kun je de positie van je eigen plaatje aanpassen door 325 (x-as) te veranderen en 155 (y-as) te veranderen.

## Demo
Zie [Demo](http://i343418.iris.fhict.nl/semester4/eigenlibrary/)

## Motivatie
Een deel van mijn portfolio, waar ik mijn javascript vaardigheden kon aantonen en ook iets leuks van heb kunnen maken.

## Installatie
Download Library.js en index.html