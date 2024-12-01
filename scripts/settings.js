import { MODULE_PATH, MODULE_ID, SYSTEM_ID } from "./constant.js"

export function init() {
    game.settings.register(MODULE_ID, 'theme', {
        name: game.i18n.localize("ffg-star-wars-alternative-ui.sheet.datapad"),
        scope: "client",
        type: String,
        default: "light",
        config: true,
        onChange: () => {
            location.reload();
        },
        choices: {
            light: game.i18n.localize("ffg-star-wars-alternative-ui.theme.light"),
            main: game.i18n.localize("ffg-star-wars-alternative-ui.theme.main"),
            datapad: game.i18n.localize("ffg-star-wars-alternative-ui.theme.datapad"),
          },
    });

    game.settings.registerMenu(MODULE_ID, "ui-colors", {
        name: game.i18n.localize("ffg-star-wars-alternative-ui.ui-colors.name"),
        hint: game.i18n.localize("ffg-star-wars-alternative-ui.ui-colors.hint"),
        label: game.i18n.localize("ffg-star-wars-alternative-ui.ui-colors.label"),
        icon: "fas fa-palette",
        type: CustomStyleForm,
        restricted: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-text-1', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-text-1.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-text-1.hint"),
        scope: "client",
        type: String,
        default: "#191813",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-text-3', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-text-3.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-text-3.hint"),
        scope: "client",
        type: String,
        default: "#781428",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-text-2', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-text-2.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-text-2.hint"),
        scope: "client",
        type: String,
        default: "#ffffff",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-background-1', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-background-1.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-background-1.hint"),
        scope: "client",
        type: String,
        default: "#415064FF",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-background-2', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-background-2.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-background-2.hint"),
        scope: "client",
        type: String,
        default: "#EEEEEEFF",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-characteristic-border', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-characteristic-border.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-characteristic-border.hint"),
        scope: "client",
        type: String,
        default: "#7a7971",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-hardpoint-text', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-hardpoint-text.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-hardpoint-text.hint"),
        scope: "client",
        type: String,
        default: "#ffffff",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-hardpoint-background-1', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-hardpoint-background-1.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-hardpoint-background-1.hint"),
        scope: "client",
        type: String,
        default: "#ff6347",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-hardpoint-background-2', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-hardpoint-background-2.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-hardpoint-background-2.hint"),
        scope: "client",
        type: String,
        default: "#6495ed",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-form-text-focus', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-form-text-focus.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-form-text-focus.hint"),
        scope: "client",
        type: String,
        default: "#191813",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-form-background-focus', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-form-background-focus.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-form-background-focus.hint"),
        scope: "client",
        type: String,
        default: "#7da9c2",
        config: false,
    });

    game.settings.register(MODULE_ID, 'ui-colors-color-hyperlink', {
        name: game.i18n.localize(MODULE_ID + ".ui-colors.color-hyperlink.name"),
        hint: game.i18n.localize(MODULE_ID + ".ui-colors.color-hyperlink.hint"),
        scope: "client",
        type: String,
        default: "#ff6400",
        config: false,
    });

    game.settings.register(MODULE_ID, 'skill-description', {
        name: game.i18n.localize(MODULE_ID + ".skill-description.name"),
        hint: game.i18n.localize(MODULE_ID + ".skill-description.hint"),
        scope: "client",
        type: Boolean,
        default: false,
        config: true,
    });

    game.settings.register(MODULE_ID, 'skill-description-compendium', {
        name: game.i18n.localize(MODULE_ID + ".skill-description.compendium.name"),
        hint: game.i18n.localize(MODULE_ID + ".skill-description.compendium.hint"),
        scope: "World",
        type: String,
        default: "starwarsffg.oggdudeskilldescriptions",
        config: true,
    });


    setStyle();
}

export function setStyle() {
    if (game.settings.get(MODULE_ID, 'theme') != "light") {
        for (let setting of game.settings.settings.values()) {
            try {
                if (!setting.key.includes("ui-colors-")) continue;
                document.querySelector(":root").style.setProperty(setting.key.replace("ui-colors-", "--"), game.settings.get(MODULE_ID, setting.key));
            } catch (error) {
                console.error(error)
            }
        }
    }
}

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;
export class CustomStyleForm extends HandlebarsApplicationMixin(ApplicationV2) {
    constructor(...args) {
        super(args);
    }

    /* -------------------------------------------- */

    static DEFAULT_OPTIONS = {
        actions: {
            reset: CustomStyleForm.reset
        },
        classes: [`${MODULE_ID}-app`, "sheet"],
        id: MODULE_ID + "-settings",
        form: {
            closeOnSubmit: true,
            handler: CustomStyleForm.submit
        },
        position: {
            width: 600,
            height: 680
        },
        tag: "form",
        window: {
            minimizable: true,
            resizable: true,
            title: MODULE_ID + ".ui-colors.name"
        }
    };

    static PARTS = {
        form: {
            template: "modules/" + MODULE_ID + "/templates/settings/ui.hbs"
        }
    };

    /* -------------------------------------------- */

    async _prepareContext() {
        this.context = {};
        const canConfigure = game.user.can("SETTINGS_MODIFY");

        for (let setting of game.settings.settings.values()) {
            try {
                // Exclude settings the user cannot change
                if (!setting.key.includes("ui-colors-") || (!canConfigure && setting.scope !== "client")) continue;

                // Update setting context
                const s = foundry.utils.duplicate(setting);
                s.name = game.i18n.localize(s.name);
                s.hint = game.i18n.localize(s.hint);
                s.value = game.settings.get(MODULE_ID, s.key);
                s.type = setting.type instanceof Function ? setting.type.name : "String";
                s.isCheckbox = setting.type === Boolean;
                s.isSelect = s.choices !== undefined;
                s.isRange = setting.type === Number && s.range;
                s.isFilePicker = setting.valueType === "FilePicker";

                if (s.key.includes("ui-colors-")) this.context[s.key] = s;

            } catch (error) {
                return null
            }
        }
        console.log(this.context)
        return {
            data: this.context,
        };
    }

    /* -------------------------------------------- */

    _onRender(context, options) {
        super._onRender(context, options);
        if (typeof ColorPicker !== "undefined") { ColorPicker.install(); }
    }

    /* -------------------------------------------- */

    static async reset() {
        for (let setting of game.settings.settings.values()) {
            try {
                if (!setting.key.includes("ui-colors-")) continue;
                console.log(setting)
                await game.settings.set(MODULE_ID, setting.key, setting.default);
                document.querySelector(":root").style.setProperty(setting.key.replace("ui-colors-", "--"), setting.default);
            } catch (error) {
                console.error(error)
                return null
            }
        }
        this.render(true);
    }

    /* -------------------------------------------- */

    static async submit(event, form, formData) {
        if (game.settings.get(MODULE_ID, 'theme') != "light") {
            for (const [key, value] of Object.entries(formData.object)) {
                if (value !== this.context[key]) {
                    await game.settings.set(MODULE_ID, key, value);
                    document.querySelector(":root").style.setProperty(key.replace("ui-colors-", "--"), value);
                }
            }
        }
    }
}

function createCompendiumChoices(){
    const compendiums = game.packs
    console.log(game.packs)

}