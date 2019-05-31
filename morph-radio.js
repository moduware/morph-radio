import { html } from 'lit-element';
import { Radio } from '@material/mwc-radio/mwc-radio.js';
// import { style } from '@material/mwc-radio/mwc-radio-css.js';
import { ripple } from '@material/mwc-ripple/ripple-directive.js';
import { morphRadioAndroidStyle } from './morph-radio-android-css.js';
import { morphRadioIosStyle } from './morph-radio-ios-css.js';
import { getPlatform } from '@moduware/lit-utils';

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
		this.platform = getPlatform();
	}

	renderMorphRadioAndroidStyle() {
		return morphRadioAndroidStyle;
	}

	renderIosMorphStyle() {
		return morphRadioIosStyle;
	}

	renderMorphRadioAndroid() {
		const morphRadioAndroid = html`
      ${this.renderMorphRadioAndroidStyle()}
      <div class="mdc-radio" .ripple="${ripple()}">
        <input class="mdc-radio__native-control" type="radio" name="${this.name}" .checked="${this.checked}" .value="${this.value}"
          @change="${this._changeHandler}" @focus="${this._focusHandler}" @click="${this._clickHandler}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
      </div>
    `;

		return morphRadioAndroid;
	}

	renderMorphRadioIos() {
		const morphRadioIos = html`
      ${this.renderIosMorphStyle()}
      <span class="mdc-radio">
        <label class="radio">
          <input class="mdc-radio__native-control" type="radio" name="${this.name}" .checked="${this.checked}" .value="${this.value}"
            @change="${this._changeHandler}" @focus="${this._focusHandler}" @click="${this._clickHandler}">
          <span class="icon"></span>
        </label>
      </span> 
    `;

		return morphRadioIos;
	}

	render() {
		return html`
      <!-- this will render 2 different template either IOS or Android -->
      ${this.platform == 'android' ? this.renderMorphRadioAndroid() : this.renderMorphRadioIos()}
    `;
	}

	static get properties() {
		return {
			name: String,
			value: String,
			platform: String
		};
	}
}

window.customElements.define('morph-radio', MorphRadio);
