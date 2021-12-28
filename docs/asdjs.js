 
$(function() {
     $('#btntheme2').on('click', function() {


        if ($('body').hasClass('asdstyle2')) {
            $('body').removeClass('asdstyle2')
            $(this).css('background', 'white')
        } else {
            $('body').addClass('asdstyle2')
            $(this).css('background', 'gold')
        }
    })

    $(document).keydown(function(event) {
        if (event.altKey && event.which === 49) {
            switchstyle(2)
            e.preventDefault();
        }
        if (event.altKey && event.which === 50) {
            switchstyle(3)
            e.preventDefault();
        }
        if (event.altKey && event.which === 53) {
            switchstyle(1)
            e.preventDefault();
        }
    });
})

function switchstyle(styleno) {
    stylename = 'asdstyle' + styleno
    if ($('body').hasClass(stylename)) {
        $('body').removeClass(stylename)
        $(this).css('background', 'white')
    } else {
        $('body').addClass(stylename)
        $(this).css('background', 'gold')
    }
}
