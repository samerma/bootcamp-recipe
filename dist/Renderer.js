class Renderer {
    constructor() { }
    getRecipes = function (input, recipeTemplate, resultsContainer) {

        $.get(`recipes/${input}`, function (data) {
            $("#" + resultsContainer).empty()
            if (data !== 'error') {
                const source = $('#' + recipeTemplate).html()
                const template = Handlebars.compile(source)
                let newHTML = template({ recipes: data })
                $("#" + resultsContainer).append(newHTML)
            }
            else {
                $("#" + resultsContainer).append(`<p>No Results!</p>`)
            }
        })
    }
}