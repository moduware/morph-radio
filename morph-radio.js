import {html, LitElement} from '@polymer/lit-element/lit-element.js';
import { Radio } from '@material/mwc-radio';

/**
 * `morph-radio`
 * A radio button that looks native on IOS or Android platform and devices
 *
 * @customElement
 * @polymer
 * @extends HTMLElement
 * @demo demo/index.html
 */
class MorphRadio extends Radio {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  }

  // render() {
  //   return html`
  //     <div class="mdc-radio" .ripple="${ripple()}">
  //       <input class="mdc-radio__native-control" type="radio" name="${this.name}" .checked="${this.checked}" .value="${this.value}"
  //         @change="${this._changeHandler}" 
  //         @focus="${this._focusHandler}" 
  //         @click="${this._clickHandler}"
  //       >
  //       <div class="mdc-radio__background">
  //         <div class="mdc-radio__outer-circle"></div>
  //         <div class="mdc-radio__inner-circle"></div>
  //       </div>
  //     </div>
  //   `;
  // }

  static get properties() {
    return {
    };
  }
}

window.customElements.define('morph-radio', MorphRadio);
