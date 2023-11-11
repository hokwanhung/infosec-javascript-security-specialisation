var express = require('express');
var router = express.Router();

const UUID = require('uuid'); // use such npm package to provide strong identification.


const TOKENS = new Set();
/* GET home page */
router.get('/', function (req, res, next) {
    const token = UUID.v4();
    TOKENS.add(token);
    res.render('index', { name: req.query.name || 'user', token: UUID.v4() });
})

module.exports = router;
module.exports.TOKENS = TOKENS; 
// the csurf node package saves the csrf_token in the cookies.

// Use same-site, http-only as well to prevent other sites from using the csrf cookies.
// Another way to limit cross-site interactions is to disable authentication? by default and cross-origin-resources-sharing:
// ensure that your website does not accept cors, which might allow functions to be used by others if not constructed standardly.
// check this for more information: https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html

// However, you must remember that XSS attacks give full access of the website to the end-users, and defeat any protections of CSRF.
// GET request by default does not have protection for CSRF and Git operations - so do not use them for state changing operations.

// And do not let a single HTML request to perform a high-privilege operation - must do it with different types of validations,
// e.g., email validation.
