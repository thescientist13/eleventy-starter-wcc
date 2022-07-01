const template = document.createElement('template');

template.innerHTML = `
  <style>
  :host .container {
    position: relative;
    width: 100vw;
    height: 100%;
  }

  :host .balloon-anchor {
    display: block
  }

  :host .balloon {
    position: absolute;
    right: .5rem;
    top: .5rem;
    transition: .3s opacity ease-out
  }

  :host .container .balloon {
    pointer-events: none;
    width: auto;
    height: calc((60vh - 2rem)/ 1.6);
    top: 36%;
    left: 1vw;
    z-index: -1;
    right: auto;
    animation-duration: 180s;
    animation-name: balloonFloat
  }

  @media (prefers-reduced-motion:reduce) {
    :host .container .balloon {
        animation-duration: 0s
    }
  }

  @keyframes balloonFloat {
    from {
        transform: translate(-7vw,30%)
    }
    to {
        transform: translate(100vw,-52%)
    }
  }

  :host .title {
    margin: 0;
  }

  @media (max-width: 768px) {
    :host .container {
      width: 80%;
    }
  }
  </style>

  <div class="container">
    <div class="balloon-anchor">
      <img src="/assets/baloon_wcc_11ty.png" class="balloon" alt="WCC Logo"  width="350" height="685" loading="lazy" decoding="async" />
    </div>
  </div>
`;

class BalloonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

module.exports = BalloonComponent;

customElements.define('x-balloon', BalloonComponent);
