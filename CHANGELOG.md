# Changelog

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
  