import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Services");
  }
  async getHtml() {
    const response = await fetch("/static/js/views/Services/services.html");
    return await response.text();
  }
}
