const plugins = require('./plugins')
const polyfills = require('./polyfills')
const moment = require('moment')
const axios = require('axios')

/**
 * Initialize polyfils here.
 */

// Plolyfills to add functionality to IE.
polyfills.forEachPolyfill();
polyfills.promisePolyfill();
