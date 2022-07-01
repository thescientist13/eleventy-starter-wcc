class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.links = [{
      label: 'Home',
      href: '/'
    }, {
      label: 'About',
      href: '/about'
    }]
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
           ${this.links.map((link) => {
            const { href, label } = link;

            return `
              <li>
                <a href="${href}">${label}</a>
              </li>
            `;
           }).join('\n')}
          </ul>
        </nav>
      </header>
    `;
  }
}

module.exports = HeaderComponent;

customElements.define('x-header', HeaderComponent);