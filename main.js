
$(document).ready(function () {
    $('.move-up span').click(function ()
     {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});