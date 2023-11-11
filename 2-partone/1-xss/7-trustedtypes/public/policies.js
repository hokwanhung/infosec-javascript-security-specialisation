'use strict';
if (window.trustedTypes && trustedTypes.createPolicy) { // Feature testing
    document.logPolicy = trustedTypes.createPolicy('logPolicy', {
        createHTML: (str) => {
            console.log(str);
            return str;
        },
        createScript: (str) => {
            console.log(str);
            return str;
        },
        createScriptURL: (str) => {
            console.log(str);
            return str;
        }
    }) // created a script with a TrustedType API.

    document.otherPolicy = trustedTypes.createPolicy('otherPolicy', {
        createHTML: (str) => str.replace(/[<>]/g, ''), // use libraries such as DOMPurify in real life,
        createScript: (str) => {
            throw new Error('don\'t create scripts');
        },
        createScriptURL: (strURL) => {
            // throw new Error('don\'t load more scripts');
            const url = new URL(strURL);
            if (url.host != 'localhost') {
                throw new Error('invalid host');
            }
            return url;
        }
    }) // created a script with a TrustedType API.
} // it is possible to define multiple policies, which is good to prevent DOM-based XSS.

// For example, html code must go through document.otherPolicy.createHTML() before accepted.