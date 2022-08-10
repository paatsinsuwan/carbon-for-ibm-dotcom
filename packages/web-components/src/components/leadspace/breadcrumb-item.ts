/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import BXBreadcrumbItem from 'carbon-web-components/es/components/breadcrumb/breadcrumb-item.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './leadspace.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Breadcrumb item.
 *
 * @element dds-breadcrumb-item
 */
@customElement(`${ddsPrefix}-breadcrumb-item`)
class DDSBreadcrumbItem extends StableSelectorMixin(BXBreadcrumbItem) {
  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSBreadcrumbItem;
