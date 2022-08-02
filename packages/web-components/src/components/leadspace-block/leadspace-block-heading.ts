/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import DDSLeadspaceHeading from '../leadspace/leadspace-heading';
import styles from './leadspace-block.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Heading content in leadspace block.
 *
 * @element dds-leadspace-block-heading
 */
@customElement(`${ddsPrefix}-leadspace-block-heading`)
class DDSLeadspaceBlockHeading extends StableSelectorMixin(DDSLeadspaceHeading) {
  static get stableSelector() {
    return `${ddsPrefix}--leadspace-block__heading`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSLeadspaceBlockHeading;
