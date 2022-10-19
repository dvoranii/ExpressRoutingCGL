import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Transportation Services");
  }

  async getHtml() {
    return `
          <h1>Transportation</h1>
          <p>This is the Services page</p>
          <p>
            <a href="/posts" data-link>View posts</a>
          </p>
      `;
  }
}
