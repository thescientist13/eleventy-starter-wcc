class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>11ty ◈ WCC</p>
      </footer>
    `;
  }
}

module.exports = FooterComponent;

customElements.define('x-footer', FooterComponent);
