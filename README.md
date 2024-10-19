
# Star Wars FFG Alternative UI

This module add new sheet for some items.  

## Actor sheet

Add a new alternative for the character, rival, nemesis and minion actor sheet.
It changes the following :

### General modifications
The scroll is now for the entire sheet not only tab. This fix some problem to see last item in long list. Like in skills and equipment.

### Header part (image, name, species,...)

* Carreer, specialisations, Force powers and special abilities are regrouping into the same element. This reduce the size of the header part of the sheet.
* Move _Force pool_ block to the header part. It was into _talent_ tab.
* Add link on _wounds box_ to _criticals_ tab.

### Characteristics tab modifications

* override skill table generation. General skills are on the left col. Other skills are on the right cols. This to have a better render and avoid to start a new skill category with only one skill in the left col.

### Items tab modifications

* Fix translation for the title __equiped__ / __unequiped__. Translations exist but was not used in original file.
* Change healingitem file to use the same HTML structure than other blocks.

### Talents tab modifications

* Change _special abilities_ and _force powers_ render as cards

### General tab modifications

* Move _gender_, _eyes_, _height_, ... blocks to _description (Biography)_ tab
* Move _motivations_ block to _obligation_ tab.
* The _general_ tab is hidden.

### Description tab modification

* _gender_, _eyes_, _height_, ... blocks are now in this tab.

### Obligation tab modifications

* _Motivations_ block are here now.

## Vehicle sheet

Some structural modifications to have the same logical than in the Actor sheet:
* Only speed, Hull trauma and system strain are always displayed.
* All items informations are in the same tab

### Header part (image, name, defense)

Move the type of sheet and the name in the top of the sheet. Like for characters.

### Characteristics tab modifications

Creation of a Characteristics tab as in character sheet.  It contains somes main characteristics and the crew.

### Items tab modifications
Add encumbrance and hard points infos and group weapons, attachement and cargo in this tab

## Journal sheet
Add background image and blockquote render effect. 

Same effect with the module [Monk's Enhanced Journal](https://github.com/ironmonk88/monks-enhanced-journal)

# Changelog
Changelog are available [here](https://github.com/TeddyBears/StarWarsFFG-alternative-UI/blob/main/CHANGELOG.md)
