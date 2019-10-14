const localStorageAvailable = require('./polyfills').localStorageAvailable;
const moment = require('moment')

module.exports = {

    /**
     *
     * @param {String} url
     * Accepts a URL and returns a bool indicating
     * whether the URL is external to uxo.iu.edu
     */
    isExternalLink(url) {
        return url.indexOf('https://mobile.iu.edu') === -1;
    },

    /**
     *
     * @param {String} el
     * Accepts a CSS selector where date gets injected on the client.
     */
    createCopyright(el) {
        let year = document.querySelector(el);
        if (year == null) return;
        let currentYear = new Date().getFullYear();
        year.innerHTML = currentYear;
    },

    /**
     *
     * @param {String} checkEl
     * Accepts a CSS selector
     */
    setIndeterminate(checkEl) {
        let indCheck = document.querySelector(checkEl);
        // If its not the checkbox docs page bail.
        if (indCheck == null) return;
        // Set the demo checkbox.
        indCheck.indeterminate = true;
    }
}