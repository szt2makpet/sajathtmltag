class mptag extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      const span = document.createElement('span');
      span.textContent = 'Ez egy menő HTML Tag by Makán Péter!';
      this.shadowRoot.appendChild(span);
    }
  }
  
  customElements.define('mptag', mptag);