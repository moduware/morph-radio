import { html } from 'lit-element';

export const morphRadioAndroidStyle = html`
  <style>
    @keyframes mdc-ripple-fg-radius-in {
      from {
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)
      }
      to {
        transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))
      }
    }

    @keyframes mdc-ripple-fg-opacity-in {
      from {
        animation-timing-function: linear;
        opacity: 0
      }
      to {
        opacity: var(--mdc-ripple-fg-opacity, 0)
      }
    }

    @keyframes mdc-ripple-fg-opacity-out {
      from {
        animation-timing-function: linear;
        opacity: var(--mdc-ripple-fg-opacity, 0)
      }
      to {
        opacity: 0
      }
    }

    .mdc-ripple-surface--test-edge-var-bug {
      --mdc-ripple-surface-test-edge-var: 1px solid #000;
      visibility: hidden
    }

    .mdc-ripple-surface--test-edge-var-bug::before {
      border: var(--mdc-ripple-surface-test-edge-var)
    }

    .mdc-radio {
      --mdc-ripple-fg-size: 0;
      --mdc-ripple-left: 0;
      --mdc-ripple-top: 0;
      --mdc-ripple-fg-scale: 1;
      --mdc-ripple-fg-translate-end: 0;
      --mdc-ripple-fg-translate-start: 0;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      will-change: transform, opacity;
      display: inline-block;
      position: relative;
      flex: 0 0 auto;
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      padding: 10px;
      cursor: pointer;
      will-change: opacity, transform, border-color, color
    }

    .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle {
      border-color: rgba(0, 0, 0, .54)
    }

    .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle {
      border-color: #018786;
      border-color: var(--mdc-theme-secondary, #018786)
    }

    .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle {
      border-color: #018786;
      border-color: var(--mdc-theme-secondary, #018786)
    }

    .mdc-radio .mdc-radio__background::before {
      background-color: #018786
    }

    @supports not (-ms-ime-align: auto) {
      .mdc-radio .mdc-radio__background::before {
        background-color: var(--mdc-theme-secondary, #018786)
      }
    }

    .mdc-radio::before,
    .mdc-radio::after {
      position: absolute;
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      content: ""
    }

    .mdc-radio::before {
      transition: opacity 15ms linear;
      z-index: 1
    }

    .mdc-radio.mdc-ripple-upgraded::before {
      transform: scale(var(--mdc-ripple-fg-scale, 1))
    }

    .mdc-radio.mdc-ripple-upgraded::after {
      top: 0;
      left: 0;
      transform: scale(0);
      transform-origin: center center
    }

    .mdc-radio.mdc-ripple-upgraded--unbounded::after {
      top: var(--mdc-ripple-top, 0);
      left: var(--mdc-ripple-left, 0)
    }

    .mdc-radio.mdc-ripple-upgraded--foreground-activation::after {
      animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards
    }

    .mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after {
      animation: 150ms mdc-ripple-fg-opacity-out;
      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))
    }

    .mdc-radio::before,
    .mdc-radio::after {
      top: calc(50% - 50%);
      left: calc(50% - 50%);
      width: 100%;
      height: 100%
    }

    .mdc-radio.mdc-ripple-upgraded::before,
    .mdc-radio.mdc-ripple-upgraded::after {
      top: var(--mdc-ripple-top, calc(50% - 50%));
      left: var(--mdc-ripple-left, calc(50% - 50%));
      width: var(--mdc-ripple-fg-size, 100%);
      height: var(--mdc-ripple-fg-size, 100%)
    }

    .mdc-radio.mdc-ripple-upgraded::after {
      width: var(--mdc-ripple-fg-size, 100%);
      height: var(--mdc-ripple-fg-size, 100%)
    }

    .mdc-radio::before,
    .mdc-radio::after {
      background-color: #018786
    }

    @supports not (-ms-ime-align: auto) {
      .mdc-radio::before,
      .mdc-radio::after {
        background-color: var(--mdc-theme-secondary, #018786)
      }
    }

    .mdc-radio:hover::before {
      opacity: .04
    }

    .mdc-radio:not(.mdc-ripple-upgraded):focus::before,
    .mdc-radio.mdc-ripple-upgraded--background-focused::before {
      transition-duration: 75ms;
      opacity: .12
    }

    .mdc-radio:not(.mdc-ripple-upgraded)::after {
      transition: opacity 150ms linear
    }

    .mdc-radio:not(.mdc-ripple-upgraded):active::after {
      transition-duration: 75ms;
      opacity: .16
    }

    .mdc-radio.mdc-ripple-upgraded {
      --mdc-ripple-fg-opacity: 0.16
    }

    .mdc-radio__background {
      display: inline-block;
      position: absolute;
      left: 10px;
      box-sizing: border-box;
      width: 50%;
      height: 50%
    }

    .mdc-radio__background::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(0, 0);
      transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      content: ""
    }

    .mdc-radio__outer-circle {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
      border-width: 2px;
      border-style: solid;
      border-radius: 50%
    }

    .mdc-radio__inner-circle {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      transform: scale(0, 0);
      transition: transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
      border-width: 10px;
      border-style: solid;
      border-radius: 50%
    }

    .mdc-radio__native-control {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      opacity: 0;
      cursor: inherit;
      z-index: 1
    }

    .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before {
      content: none
    }

    .mdc-radio__native-control:checked+.mdc-radio__background,
    .mdc-radio__native-control:disabled+.mdc-radio__background {
      transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)
    }

    .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,
    .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle {
      transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)
    }

    .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,
    .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle {
      transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)
    }

    .mdc-radio--disabled {
      cursor: default;
      pointer-events: none
    }

    .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle {
      transform: scale(0.5);
      transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)
    }

    .mdc-radio__native-control:disabled+.mdc-radio__background,
    [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background {
      cursor: default
    }

    .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,
    [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle {
      border-color: rgba(0, 0, 0, .26)
    }

    .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,
    [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle {
      border-color: rgba(0, 0, 0, .26)
    }

    .mdc-radio__native-control:focus+.mdc-radio__background::before {
      transform: scale(2, 2);
      transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);
      opacity: .12
    }

    :host {
      display: inline-block;
      outline: none
    }
    :host {
			/* background-color: #d63547; */
			/* background-color: #d63547; */
      --mdc-theme-secondary: #d02e3d;
    }
    div.mdc-radio div.mdc-radio__outer-circle {
      /* border-color: red; */
    }
  </style>
  `;
