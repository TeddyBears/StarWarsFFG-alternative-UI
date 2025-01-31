# Changelog

`12.6.2.1_905`

* Fixes:
  * weapon damage can be updated now


`12.6.1.1_905`

* Features:
  * test system 1.905 compatibility
* Fixes:
  * Journal link for some modules [#2](https://github.com/TeddyBears/StarWarsFFG-alternative-UI/issues/2)
  * __Drag here__ buttons are not cut with break line
  * Skill purchase for system 1.905
  * Replace select by selectOptions to remove deprecated warning in ffg-block
  * Add translation for characteristic 'none' option
  * Improve HTML structure for Obligations tab. Remove some div
  * Add default height on __Obligations__ and __Duties__ blocks
  * Add __Morality__ and __Conflict__ blocks into Obliglations tab

`12.6.0.1_903`

* Features:
  * Display encumbrance value for gear items in the material tab
  * Add the icon next the skill name to purchase skill
  * Add settings to add an icon next the skill name to open the skill description from compendium
  * Add setting to select the compendium where find skills description
* Fixes:
  * Purchase skill icon can be use to increase the skill rank
  * Display adjusted and value damage for weapons
  * Width and spaces for characteritic blocks
  * Remove journal datapad background for the Main theme

`12.5.1.1_903`

* Fixes:
  * Fix scroll for 'talent' descriptions in specialization, force power and signaure ability sheets

`12.5.0.1_903`

* Features:
  * Add alternative sheet for:
    * Specializations
    * Force powers
    * Signature abilities

`12.4.0.1_903`

* Features:
  * Add theme in module settings :
    * `Light` : Keep the colors of the systeme for sheets
    * `Main` : All sheets use the same colors
    * `Datapad` : Actor, Item and Journal sheets use a datapad background
  * Display the hardpoint current value for armor like than weapon (text and background color)
  * Characteristic blocks for all Items and actor have the same render (size, border, spaces)
  * Add color settings to change the default color for `Main` and `Datapad` themes
  * Change some default color values
  * Change all characteristic fields to have the same sizes, border and form (circle)

* Fixes:
  * Default width for actor sheets to 700px
  * Display hardpoints current value for weapons, armor and ship weapon

`12.3.0.1_903`

* Features:
  * Remove the link on XP block. Block and xp history are now on the same tab
  * Add module setting to add datapad background. By default the module keeps the colors of the main theme (ie. Mandar) and applies the others modifications
* Fixes:
  * The link to critical injuries tab on the wounds block

`12.2.1.1_903`

* Fixes:
  * Change paths for background image to relatif. This should fix the module for the Forge

`12.2.0.1_903`

* Features:
  * Rework the for `Journal`:
    * Add background image
    * Add effect for blockquote in Journal entry
  * Remove the module setting to add the new sheet option for actor. Now the sheet option is always available. Still need to apply it to your actors
  * Move the navigation / tabs menu to the top of the sheet
  * Rework the `item` sheets:
    * Add background image
    * remove the configuration tab and move its fields in the main tab
    * Items reworked are the following:
      * Weapons
      * Armors
      * Gears
      * Talents
      * Species
      * Careers
      * Ship weapons
      * item Attachments
      * Item modifiers
      * Ship attachments
      * Critical hits
      * Critical injuries
  
* Fixes:
  * Defense starboard and port blocks stay with the defense schema when you enlarge the vehicle window
  * Vehicle image dimensions don't increase when you enlarge the vehicle window
  
`12.1.1.1_903`

* Features:
  * improve actor datapad background size and position
  * The module is only available with the system `starwarsffg`
  
* Fixes:
  * Update the type displayed for minions above the name
  