const express = require('express')
const router = express.Router()
const urllib = require('urllib')

router.get('/sanity', function (req, res) {
    res.send('OK')
})

router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    let recipes = []
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, resolve) {
        console.log(JSON.parse(data).results.length)
        recipes = JSON.parse(data).results.map(r => {
            return {
                title: r.title,
                ingredients: r.ingredients,
                thumbnail: r.thumbnail,
                href: r.href
            }
        })
        res.send(recipes)
    })
})


module.exports = router