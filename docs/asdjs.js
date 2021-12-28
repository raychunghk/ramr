$(function() {
    $('#btntheme2').on('click', function() {



    })

    $(document).keydown(function(event) {
        if (event.altKey && event.which === 49) {
            switchstyle(1)
            event.preventDefault();
        }
        if (event.altKey && event.which === 50) {
            switchstyle(4)
            event.preventDefault();
        }
        if (event.altKey && event.which === 51) {
            switchstyle(2)
            event.preventDefault();
        }
        if (event.altKey && event.which === 52) {
            switchstyle(3)
            event.preventDefault();
        }
    });
})

function removeAllStyle() {
    $([1, 2, 3, 4, 5, 5]).each(function(i, v) {

        stylename = 'asdstyle' + this
        console.log(stylename)
        if ($('body').hasClass(stylename)) {
            console.log(this);
            $('body').removeClass(stylename)

        }
    })
}

function switchstyle(styleno) {
    removeAllStyle();
    stylename = 'asdstyle' + styleno
    if ($('body').hasClass(stylename)) {
        $('body').removeClass(stylename)
        $(this).css('background', 'white')
    } else {
        $('body').addClass(stylename)
        $(this).css('background', 'gold')
    }
}
