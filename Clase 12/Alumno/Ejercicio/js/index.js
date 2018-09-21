console.log('Init App')

var divNode = $('squaresContainer')

divNode.click (toggle)

var player = true

function toggle () {
    var divNode = $(this)

    if (player) { 
        divNode.toggleClass('.circle')
        player = false
    } else {
        divNode.toggleClass('.cross')
        player = true
    }
}

