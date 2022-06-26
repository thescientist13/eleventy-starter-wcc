const template = document.createElement('template');

template.innerHTML = `
  <style>
    @keyframes logo-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    :host img {
      height: 15vh;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      animation: logo-spin infinite 30s linear;
    }
    
    :host h1 {
      color: var(--color-primary)  
    }

    :host .container {
      margin-top: 15vh;
      height: 30vh;
    }
  </style>

  <div class="container">
    <img src="/assets/wcc-logo.png" alt="WCC Logo"/>
  </div>

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