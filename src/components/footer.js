class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        11ty ◈ WCC
      </footer>
    `;
  }
}

module.exports = FooterComponent;

customElements.define('x-footer', FooterComponent);