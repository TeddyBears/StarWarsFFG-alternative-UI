import { ItemSheetFFGV2 } from "../../../../systems/starwarsffg/modules/items/item-sheet-ffg-v2.js";

export class FFGAlternateItemSheet extends ItemSheetFFGV2 {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["starwarsffg", "sheet", "item", "ffg-alternative", "v2"],
      template: "modules/ffg-star-wars-alternative-ui/templates/actors/ffg-character-sheet.html",
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }],
      height: 600,
      scrollY: [""],
    });
  }
  get template() {
    const path = "modules/ffg-star-wars-alternative-ui/templates/items";
    return `${path}/ffg-${this.item.type}-sheet.html`;
  }


  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    html.find(".talent-name span.input").focusout(async (ev) => {
      const item = $(ev.currentTarget);
      let name = item.data("name");
      let value = item[0].innerText;
      const input = $(".talent-name input[name='" + name + "']")
      input.val(value)
    });

  }
}

export async function loadItemsHandleBarTemplates() {
  // register templates parts
  const templatePaths = [
    "modules/ffg-star-wars-alternative-ui/templates/parts/item/ffg-details.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/item/ffg-characteristics.html",
    "modules/ffg-star-wars-alternative-ui/templates/items/ffg-weapon-sheet.html",
    "modules/ffg-star-wars-alternative-ui/templates/parts/item/ffg-description.html",
    "modules/ffg-star-wars-alternative-ui/templates/items/ffg-criticaldamage-sheet.html",

  ];

  return loadTemplates(templatePaths);
}