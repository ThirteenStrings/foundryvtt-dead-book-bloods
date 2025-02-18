
import { WickedSheet } from "./wicked-sheet.js";

/**
 * @extends {WickedSheet}
 */
export class WickedFactionSheet extends WickedSheet {

  /** @override */
	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
          classes: ["wicked-ones", "sheet", "actor"],
          template: "systems/foundryvtt-dead-book-bloods/templates/faction-sheet.html",
      width: 400,
      height: 500,
      tabs: []
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();
		data.editable = this.options.editable;
    const actorData = data.data;
		data.actor = actorData;
		data.data = actorData.data;
		
    // Override Code for updating the sheet goes here

    return data;
  }


  /* -------------------------------------------- */

   /** @override */
	activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

  }

  /* -------------------------------------------- */
  /*  Form Submission                             */
	/* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {

    // Update the Item
    super._updateObject(event, formData);

    const img = this.actor.data.token.img;

    if (img != "" && img.indexOf(`/default-images/faction-token`) == -1) {
      return;
    }

    let image_path = `systems/foundryvtt-dead-book-bloods/styles/assets/default-images/faction-token-${formData['data.category']}-${Math.max(1,formData['data.tier.value'])}.webp`;
    formData['token.img'] = image_path;
    let data = [];
    let image = {
      img: image_path
    };

    let tokens = this.actor.getActiveTokens();

    tokens.forEach(function (token) {
			data.push(mergeObject(
				{_id: token.id},
				image
			));
    });

    await TokenDocument.updateDocuments(data, {parent: game.scenes.current});

    // Update the Actor
    return this.object.update(formData);
  }

  /* -------------------------------------------- */

}
