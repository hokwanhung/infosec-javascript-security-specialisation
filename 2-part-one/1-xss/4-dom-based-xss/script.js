'use strict';

// also works which could be problematic for shared computers.
localStorage.setItem('firstName', `<img src="aaaa" onerror="alert('hello'))" />`)

function fetchUser() {
    return Promise.resolve({
        // firstName: 'John',

        // no effects as browsers do not execute <script> tags added to innerHTML.
        // firstName: `<script deferred>console.log(1)</script>`, 

        // work because the browsers will try to render a broken image,
        firstName: localStorage.getItem('firstName'),

        lastName: 'Doe'});
}

function clickMe() {

    fetchUser()
    .then(({firstName, lastName}) => {
        // Conclusion: Never use innerHTML or other methods that could be vulnerable.
        // Anything the framework provides a string value in the front-end webpagbe should not be trusted.

        // For React: https://legacy.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml 
        // However, server-side React has always been vulnerable to XSS attacks - so basically always escape things.

        // Never render HTML that yourself do not write, even if it's coming from the localStorage or even backend.
        // Make sure to learn more about XSS attacks with each framework's documentation.
        document.getElementById('hello').innerHTML = `Hello ${firstName} ${lastName}!`;
    });
}