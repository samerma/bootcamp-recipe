class Renderer {
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

