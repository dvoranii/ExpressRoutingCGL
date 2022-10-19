export default class {
  constructor(params) {
    this.params = params;

    console.log(this.params);
  }

  settitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
