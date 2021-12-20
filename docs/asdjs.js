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

})