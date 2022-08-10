/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement, html, LitElement, property } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './content-section.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The Content Section component for use with cardSection
 *
 * @element dds-content-section
 * @slot heading - Section heading
 */
@customElement(`${ddsPrefix}-content-section`)
class DDSContentSection extends StableSelectorMixin(LitElement) {
  /**
   * An optional custom class for children.
   */
  @property({ attribute: 'children-custom-class', reflect: true })
  childrenCustomClass = '';

  render() {
    return html`
      <div class="${prefix}--content-section ${prefix}--content-section-layout">
        <div class="${prefix}--content-section__leading">
          <slot name="heading"></slot>
          <slot name="copy"></slot>
          <slot name="footer"></slot>
        </div>
        <div class="${prefix}--content-section__body ${this.childrenCustomClass}">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--content-section`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentSection;
