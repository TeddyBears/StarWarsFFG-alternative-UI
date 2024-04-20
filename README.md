
# Star Wars FFG Alternative UI

This module add new sheet for some items.  
Add also some _Macros_, _Items_ and _Roll tables_ as _compendiums_.

## Actor sheet

Add a new alternative for the character actor sheet.
It changes the following :

### Header part (image, name, species,...)

* Carreer, specialisations, Force powers and special abilities are regrouping into the same element. This reduce the size of the header part of the sheet.
* Move _Force pool_ block to the header part. It was into _talent_ tab.
* Add link on _wounds box_ to _general_ tab.

### Characteristics tab modifications

* override skill table generation. General skill are on the left col. Other skill are on the right cols.
* TODO: Fix scroll problem.

### Items tab modifications

* Fix translation for the title __equiped__ / __unequiped__. Translation exists but was not used in original file.
* Change healingitem file to use the same HTML structure than other blocks.
* TODO: Fix scroll problem.

### Talents tab modifications

* Change _special abilities_ and _force powers_ render
* TODO: Fix scroll problem.
* TODO: use the same partial for _special abilities_ and _force powers_. See injuries as examples.

### General tab modifications

* Move _gender_, _eyes_, _height_, ... blocks to _description (Biography)_ tab
* Move _motivations_ block to _obligation_ tab.
* Move _critical injuries_ into this tab.
* The _general_ tab is hidden.
* TODO: Fix scroll problem.

### Description tab modification

* _gender_, _eyes_, _height_, ... blocks are now in this tab.
* Move _critical injuries_ to _general_ tab.
* TODO : Where move XP ?
* TODO: Fix scroll problem.

### Obligation tab modifications

* _Motivations_ block are here now.
* TODO: Fix scroll problem.
* TODO: Remove draggable effect on _obligations_, _duties_ and _motivations_.

## Added compendiums

### Items

### Roll tables

### Macros
