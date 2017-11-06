const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('hero').select().then(hero => {
    res.render('climbing-heroes', { hero: hero });
  })
});

module.exports = router;
