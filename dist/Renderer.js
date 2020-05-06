class Renderer {
    constructor() { }
    render2 = function (input, recipeTemplate, resultsContainer) {

        $.get(`recipes/${input}`, function (data) {
            $("#" + resultsContainer).empty()
            if (data !== 'error' && data.length != 0) {
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
    render = function (data) {
        $("#results").empty()
        if (data !== 'error' && data.length != 0) {
            const source = $('#recipe-template').html()
            const template = Handlebars.compile(source)
            let newHTML = template({ recipes: data })
            $("#results").append(newHTML)
        }
        else {
            $("#results").append(`<p>No Results!</p>`)
        }
    }
}

