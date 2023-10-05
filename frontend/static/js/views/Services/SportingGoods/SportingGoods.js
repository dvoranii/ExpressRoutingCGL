import AbstractView from "../../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Hockey and Sporting Goods");
  }

  async getHtml() {
    const response = await fetch(
      "/static/js/views/Services/SportingGoods/sportingGoods.html"
    );
    return await response.text();
  }
}
