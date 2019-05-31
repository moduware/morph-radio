import { html } from 'lit-element';

const checkmarkSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 10'><polygon fill='#007aff' points='11.6,0 4.4,7.2 1.4,4.2 0,5.6 4.4,10 4.4,10 4.4,10 13,1.4' /></svg>";

export const morphRadioIosStyle = html`
  <style>
    .radio {
      cursor: pointer;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      z-index: 1;
      width: 22px;
    }

    .icon {
      width: 22px;
      height: 22px;
      position: relative;
      display: block;
      z-index: 1;
      border-radius: 50%;
      border: 1px solid white;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    .radio > input[type=radio]:checked + .icon {
      border-color: white;
      background: no-repeat center;
      background-image: url('/src/images/ios-checkmark.svg');
      background-size: 13px 10px;
    }

    .mdc-radio__native-control {
      display: none;
    }

    :host {
      outline: 0;
    }

    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
    }
  </style>
`;
