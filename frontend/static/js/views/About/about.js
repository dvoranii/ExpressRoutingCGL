import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("About");
  }

  async getHtml() {
    const response = await fetch("/static/js/views/About/about.html");
    return await response.text();
  }
}
