
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {name: req.query.name || 'user'});
});

module.exports = router;