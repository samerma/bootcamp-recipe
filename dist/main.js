renderer = new Renderer()

const fetchIngredients = function () {
    const input = $('input').val()
    $.get(`recipes/${input}`, function (data) {
        renderer.render(data)
    })
}

$("#results").on('click', '.image', function () {
    console.log($(this).closest('.recipe').find('li')[0].innerHTML)
})