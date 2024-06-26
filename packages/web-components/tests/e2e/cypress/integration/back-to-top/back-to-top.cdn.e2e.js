/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('cds-back-to-top (cdn)', () => {
  it('should load the default back-to-top example', () => {
    cy.visit('/back-to-top/cdn.html');

    // Take a snapshot for visual diffing
    cy.percySnapshot('cds-back-to-top | cdn | default');
  });
});
