import AbstractView from "../../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Transportation Services");
  }

  async getHtml() {
    const response = await fetch(
      "/static/js/views/Services/Transportation/transportation.html"
    );
    return await response.text();
  }
}
