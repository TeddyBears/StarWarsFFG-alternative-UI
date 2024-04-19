import { ActorSheetFFG } from "../../../../systems/starwarsffg/modules/actors/actor-sheet-ffg.js";
import { FFG } from "../../../../systems/starwarsffg/modules/swffg-config.js";


export class FFGAlternateActorSheet extends ActorSheetFFG {
 /** @override */
  static get defaultOptions() {
	  return foundry.utils.mergeObject(super.defaultOptions, {
  	  classes: ["starwarsffg", "sheet", "actor","ffg-alternative"],
  	  template: "modules/ffg-star-wars-alternative-ui/templates/actors/ffg-character-sheet.html",
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "characteristics" }],
      scrollY: [".tableWithHeader", ".tab", ".skillsGrid", ".skillsList", ".skillsTablesGrid"],
    });
  }
 get template() {
    const path = "modules/ffg-star-wars-alternative-ui/templates/actors";
    return `${path}/ffg-${this.actor.type}-sheet.html`;
  }

  _createSkillColumns(data){
    const numberSkills = Object.values(data.data.skills).length;
    const totalRows = numberSkills + Object.values(data.data.skilltypes).length;
    console.log(totalRows);
    let colRowCount = Math.ceil(totalRows / 2.0);
  
    const cols = [[], []];
  
    let currentColumn = 0;
    let rowsLeft = colRowCount;
  
    data.data.skilltypes.forEach((type,index) => {
      console.log(index + "-" + type.label);
      if(index > 0) {
        currentColumn = 1;
      }
      // filter and sort skills for current skill category
      let sortFunction = (a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        return 0;
      };
      if (game.settings.get("starwarsffg", "skillSorting")) {
        sortFunction = (a, b) => {
          return data.data.skills[a].label.localeCompare(data.data.skills[b].label, game.i18n.lang);
        };
      }
  
      const skills = Object.keys(data.data.skills)
        .filter((s) => data.data.skills[s].type === type.type)
        .sort(sortFunction);

      cols[currentColumn].push({ id: "header", ...type });
      rowsLeft -= 1;
      skills.forEach((s, index) => {
        cols[currentColumn].push({ name: s, ...data.data.skills[s] });
      });
    });
  
    return cols;
  }
}
export const default_width = {
  character: 730,
  minion: 595,
  vehicle: 595,
  homestead: 595,
};

async function loadHandleBarTemplates()
{
  // register templates parts
  const templatePaths = [
    "modules/ffg-star-wars-alternative-ui/templates/parts/shared/ffg-tabs.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/shared/ffg-block.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-details.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-characteristics.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-skills.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-items.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-healingitem.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-weapon-armor-gear.html"
  ];
  
  return loadTemplates( templatePaths );
}

 /**
   * Creates two even columns of skills for display while also sorting them.
   * @param  {Object} data
   */
 function _createSkillColumns(data) {
  const numberSkills = Object.values(data.data.skills).length;
  const totalRows = numberSkills + Object.values(data.data.skilltypes).length;

  let colRowCount = Math.ceil(totalRows / 2.0);
  console.log(colRowCount);
  const cols = [[], []];

  let currentColumn = 0;
  let rowsLeft = colRowCount;

  data.data.skilltypes.forEach((type) => {
    // filter and sort skills for current skill category
    let sortFunction = (a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      return 0;
    };
    if (game.settings.get("starwarsffg", "skillSorting")) {
      sortFunction = (a, b) => {
        return data.data.skills[a].label.localeCompare(data.data.skills[b].label, game.i18n.lang);
      };
    }

    const skills = Object.keys(data.data.skills)
      .filter((s) => data.data.skills[s].type === type.type)
      .sort(sortFunction);
console.log(skills);
    // if the skill list is larger that the column row count then take into account the added header row.
    if (skills.length >= colRowCount) {
      if (skills.length - colRowCount > 2) {
        colRowCount = Math.ceil((totalRows + 1) / 2.0);
        rowsLeft = colRowCount;
      } else {
        colRowCount = skills.length + 1;
        rowsLeft = colRowCount;
      }
    }

    cols[currentColumn].push({ id: "header", ...type });
    rowsLeft -= 1;
    skills.forEach((s, index) => {
      cols[currentColumn].push({ name: s, ...data.data.skills[s] });
      rowsLeft -= 1;
      if (rowsLeft <= 0 && currentColumn === 0) {
        currentColumn += 1;
        rowsLeft = colRowCount;

        if (index + 1 < skills.length) {
          cols[currentColumn].push({ id: "header", ...type });
          rowsLeft -= 1;
        }
      }
    });
  });

  return cols;
}

Hooks.once( "init", function() {
  const actorSheetAltLabel = game.i18n.localize("ffg-star-wars-alternative-ui.sheet.actor.label");
  Actors.registerSheet("starwarsffg", FFGAlternateActorSheet, { types: ["character"], makeDefault: true, label: actorSheetAltLabel});
  loadHandleBarTemplates();
  FFG.sheets.defaultWidth = {
    character: 730, /*override the defaut width for actor sheet*/
    minion: 595,
    vehicle: 595,
    homestead: 595,
  };
});


