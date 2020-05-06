renderer = new Renderer()

const fetchIngredients = function () {
    const input = $('input').val()
    renderer.getRecipes(input, 'recipe-template', 'results')
}