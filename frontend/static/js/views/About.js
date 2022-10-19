import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("About");
  }

  async getHtml() {
    return `
      
          <h1>About</h1>
          <p>This is the about page</p>
          <p>
            <a href="/posts" data-link>View posts</a>
          </p>
      `;
  }
}
