import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.settitle("Contact Us");
  }

  async getHtml() {
    return `

    <style>
    .map-container{
        padding: 20px;
    }
    </style>
          <h1>Ontario Office</h1>
          <p>This is the contact page</p>
          <p>
            <a href="/posts" data-link>View posts</a>
          </p>

          <div class="map-container">
          <iframe 
          
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.631430356315!2d-79.70014974174408!3d43.64269913578253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f9cf5df3f69%3A0xa7f9f217d07e3f26!2s65%20Superior%20Blvd%2C%20Mississauga%2C%20ON%20L5T%202X9!5e0!3m2!1sen!2sca!4v1666149958951!5m2!1sen!2sca" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          </iframe>
          </div>
      `;
  }
}

// consider using leaflet to make it more cus
