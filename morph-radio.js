import {html, LitElement} from '@polymer/lit-element/lit-element.js';

/**
 * `morph-radio`
 * A radio button that looks native on IOS or Android platform and devices
 *
 * @customElement
 * @polymer
 * @extends HTMLElement
 * @demo demo/index.html
 */
class MorphRadio extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  
    this.prop1 = 'morph-radio';
    this.loop = 2;
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello ${this.prop1} ${this.loop}!</h2>
    `;
  }

  static get properties() {
    return {
      loop: Number,
      prop1: String
    };
  }
}

window.customElements.define('morph-radio', MorphRadio);
