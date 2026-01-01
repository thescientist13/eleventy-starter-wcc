export default class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>11ty ◈ WCC</p>
      </footer>
    `;
  }
}

customElements.define('x-footer', FooterComponent);
