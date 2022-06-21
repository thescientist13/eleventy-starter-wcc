const template = document.createElement('template');

template.innerHTML = `
  <h1>Let's get this to spin!</h1>
`;

class SpinnerComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

module.exports = SpinnerComponent;

customElements.define('x-spinner', SpinnerComponent);