const express = require('express')
const Article = require('../models/article')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const removeBlanks = require('../../lib/remove_blank_fields')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
router.get('/articles', (req, res, next) => {
  Article.find()
    .then(articles => {
      return articles.map(article => article.toObject()).reverse()
    })
    .then(articles => res.status(200).json({ articles: articles }))
    .catch(next)
})

// GET /articles/:id
router.get('/articles/:id', (req, res, next) => {
  Article.findById(req.params.id)
    .then(handle404)
    .then(article => res.status(200).json({ article: article.toObject() }))
    .catch(next)
})

// POST /articles
router.post('/articles', (req, res, next) => {
  Article.create(req.body.article)
    .then(article => {
      console.log(article)
      res.status(201).json({ article: article.toObject() })
    })
    .catch(next)
})

// PATCH /articles/:id
router.patch('/articles/:id', removeBlanks, (req, res, next) => {
  Article.findById(req.params.id)
    .then(handle404)
    .then(article => {
      return article.updateOne(req.body.article)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DELETE /articles/:id
router.delete('/articles/:id', (req, res, next) => {
  Article.findById(req.params.id)
    .then(handle404)
    .then(article => {
      article.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// AUTH
// const passport = require('passport')
// const requireToken = passport.authenticate('bearer', { session: false })
// const requireOwnership = customErrors.requireOwnership
module.exports = router
