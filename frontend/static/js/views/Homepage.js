import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Home");
  }

  async getHtml() {
    return `
    
        <h1>Home</h1>
        <p>This is the home page</p>
        <p>
          <a href="/posts" data-link>View posts</a>
        </p>
    `;
  }
}
