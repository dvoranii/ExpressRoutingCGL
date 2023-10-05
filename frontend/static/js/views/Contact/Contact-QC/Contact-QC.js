import AbstractView from "../../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Contact Us");
  }

  async getHtml() {
    const response = await fetch(
      "/static/js/views/Contact/Contact-QC/contact-qc.html"
    );
    return await response.text();
  }
}

// consider using leaflet to make it more cus
// Use google api for maps embed
