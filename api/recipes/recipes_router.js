const router = require('express').Router()
const RECIPES = require('./recipes_model')

router.get('/:recipe_id', (request, response, next) => {
     RECIPES.getRecipeById(request.params.recipe_id)
          .then(resource => {
               response.status(200).json(resource)
          })
          .catch(next)
})

//Error Handling
router.use((error, request, response, next) => { // eslint-disable-line
     response.status(error.status || 500).json({
          message: error.message,
          stack: error.stack
     })
})
module.exports = router