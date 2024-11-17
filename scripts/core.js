import { MODULE_PATH, MODULE_ID, SYSTEM_ID } from "./constant.js"
import { init as settingInit } from './settings.js';
import { FFG } from "../../../systems/starwarsffg/modules/swffg-config.js";
import { FFGAlternateActorSheet } from './sheets/actor.js';
import { loadHandleBarTemplates } from './sheets/actor.js';
import { FFGAlternateItemSheet } from './sheets/items.js';
import { loadItemsHandleBarTemplates } from './sheets/items.js';


function addStyleSheet(stylesheetname) {
	$("head").append('<link href="' + MODULE_PATH + '/styles/dist/' + stylesheetname + '.css" rel="stylesheet" type="text/css" media="all">');
}

Hooks.once("init", () => {
	// Add Game settings
	settingInit();
	// Add new css
	addStyleSheet(game.settings.get(MODULE_ID, 'theme'));

	// Add te new actor alternative sheet
	const actorSheetAltLabel = game.i18n.localize("ffg-star-wars-alternative-ui.sheet.actor.label");
	DocumentSheetConfig.registerSheet(
		Actor,
		SYSTEM_ID,
		FFGAlternateActorSheet,
		{
			types: ["character", "rival", "nemesis", "minion", "vehicle"],
			label: actorSheetAltLabel,
		}
	);
	loadHandleBarTemplates();

	const itemSheetAltLabel = game.i18n.localize("ffg-star-wars-alternative-ui.sheet.item.label");
	DocumentSheetConfig.registerSheet(
		Item,
		SYSTEM_ID,
		FFGAlternateItemSheet,
		{
			types: ["weapon", "armour", "gear", "career", "species", "talent", "shipweapon", "itemmodifier", "itemattachment", "shipattachment", "criticaldamage", "criticalinjury", "specialization", "forcepower", "signatureability"],
			label: itemSheetAltLabel,
		}
	);
	loadItemsHandleBarTemplates();

	// Override default size for sheets
	FFG.sheets.defaultWidth.character = 700; /*override the defaut width for actor sheet*/
	FFG.sheets.defaultWidth.rival = 700; /*override the defaut width for actor sheet*/
	FFG.sheets.defaultWidth.nemesis = 700; /*override the defaut width for actor sheet*/
	FFG.sheets.defaultWidth.minion = 700; /*override the defaut width for actor sheet*/
	FFG.sheets.defaultHeight.minion = 783; /*override the defaut heigth for minion sheet*/
});