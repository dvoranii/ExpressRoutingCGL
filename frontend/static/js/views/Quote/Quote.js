import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Request a Quote");
  }

  async getHtml() {
    const response = await fetch("/static/js/views/Quote/quote.html");
    return await response.text();
  }
}
