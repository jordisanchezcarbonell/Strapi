'use strict';

/**
 * arma service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arma.arma');
