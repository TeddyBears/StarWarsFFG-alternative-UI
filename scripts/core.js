const MODULE_PATH = "modules/ffg-star-wars-alternative-ui";
const MODULE_ID = "ffg-star-wars-alternative-ui";
const SYSTEM_ID = "starwarsffg";

import { FFG } from "../../../../systems/starwarsffg/modules/swffg-config.js";
import { FFGAlternateActorSheet } from './sheets/actor.js';
import { loadHandleBarTemplates } from './sheets/actor.js';


function addStyleSheet(stylesheetname) {
	$("head").append('<link href="' + MODULE_PATH + '/styles/dist/' + stylesheetname + '.css" rel="stylesheet" type="text/css" media="all">');
}

Hooks.once("init", () => {

	// Add Game settings
	game.settings.register(MODULE_ID, 'sheet-actor', {
		name: game.i18n.localize("ffg-star-wars-alternative-ui.sheet.actor.alt"),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	// Add actor sheet overrided elements
	if (game.settings.get(MODULE_ID, 'sheet-actor')) {
		if (game.settings.get(SYSTEM_ID, 'ui-uitheme') === "mandar") {
			addStyleSheet("main");
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
			FFG.sheets.defaultWidth.character = 700; /*override the defaut width for actor sheet*/
			FFG.sheets.defaultHeight.minion = 783; /*override the defaut heigth for minion sheet*/
		}

	}
});