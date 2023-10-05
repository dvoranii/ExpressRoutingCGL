import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Home");
  }

  async getHtml() {
    const response = await fetch("/static/js/views/Home/home.html");
    return await response.text();
  }
}
