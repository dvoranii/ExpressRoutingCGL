import AbstractView from "../../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Contact Us");
  }

  async getHtml() {
    const response = await fetch(
      "/static/js/views/Contact/Contact-ON/contact-on.html"
    );
    return await response.text();
  }
}

//

// consider using leaflet to make it more cus
