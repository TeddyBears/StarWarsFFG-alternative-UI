const MODULE_PATH = "modules/ffg-star-wars-alternative-ui";

import { FFGAlternateActorSheet } from './sheets/actor.js';
//import { loadHandleBarTemplates } from './sheets/actor.js';


function rpgUIAddActorSheetAlt() {
	$("head").append('<link href="modules/ffg-star-wars-alternative-ui/styles/dist/ffg-star-wars-alternate-ui-actor.min.css" rel="stylesheet" type="text/css" media="all">');
}

Hooks.on("init", () => {

	game.settings.register('ffg-star-wars-alternative-ui', 'sheet-actor', {
		name: game.i18n.localize("ffg-star-wars-alternative-ui.sheet.actor.active"),
		scope: "client",
		type: Boolean,
		default: true,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	if (game.settings.get('ffg-star-wars-alternative-ui', 'sheet-actor')) {
		rpgUIAddActorSheetAlt();
	}
});





