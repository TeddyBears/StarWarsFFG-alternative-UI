import { ActorSheetFFGV2 } from "../../../../systems/starwarsffg/modules/actors/actor-sheet-ffg-v2.js";



export class FFGAlternateActorSheet extends ActorSheetFFGV2 {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["starwarsffg", "sheet", "actor", "ffg-alternative", "v2"],
      template: "modules/ffg-star-wars-alternative-ui/templates/actors/ffg-character-sheet.html",
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "characteristics" }],
      scrollY: [""],
    });
  }
  get template() {
    const path = "modules/ffg-star-wars-alternative-ui/templates/actors";
    return `${path}/ffg-${this.actor.type}-sheet.html`;
  }

  _createSkillColumns(data) {
    const cols = [[], []];
    let currentColumn = 0;
  
    data.data.skilltypes.forEach((type, index) => {
      if (index > 0) {
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
      skills.forEach((s, index) => {
        cols[currentColumn].push({ name: s, ...data.data.skills[s] });
      });
    });

    return cols;
  }
}

export async function loadHandleBarTemplates() {
  // register templates parts
  const templatePaths = [
    "modules/ffg-star-wars-alternative-ui/templates/parts/shared/ffg-tabs.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/shared/ffg-block.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-details.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-tab-characteristics.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-skills.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-tab-items.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-healingitem.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-weapon-armor-gear.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-talents.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-abilities.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-forcepowers.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-signatureability.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-criticalinjury.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-tab-description.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-tab-obligations.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-vehicle-crew.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-vehicle-weapon-attachments.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/actor/ffg-vehicle-cargo.html",
  ];

  return loadTemplates(templatePaths);
}