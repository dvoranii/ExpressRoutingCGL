import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Request a Quote");
  }

  async getHtml() {
    return `
          <h1>Quote Calculation Form</h1>
          <p>This is the quote generator page</p>
          <p>
            <a href="/posts" data-link>View posts</a>
          </p>
      `;
  }
}
