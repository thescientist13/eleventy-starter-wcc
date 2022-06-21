const template = document.createElement('template');

template.innerHTML = `
  <p>Let's get this to spin!</p>
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