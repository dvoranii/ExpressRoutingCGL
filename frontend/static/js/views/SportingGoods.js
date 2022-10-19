import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Hockey and Sporting Goods");
  }

  async getHtml() {
    return `
          <h1>Hockey and Sporting Goods</h1>
          <p>This is the Services page</p>
          <p>
            <a href="/posts" data-link>View posts</a>
          </p>
      `;
  }
}
