import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Services");
  }

  setName() {
    let someting = "a name";
    return someting;
  }

  async getHtml() {
    return `
      <style>
      h1 {
        color: red;
      }
      </style>
          <h1>Services</h1>
          <p>This is the Services page</p>
          <p>
            <a href="/posts" data-link>View posts</a>
          </p>
          <p>${this.setName()}</p>
      `;
  }
}
