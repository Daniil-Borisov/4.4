$(document).ready(function(){
    $('input:radio').click(function(){
        if ($('#choose1').prop('checked')){
            $(".heading").off();
            $('.description').slideUp();
            $(".heading").click(function() {
                $('.description').not($(this).next()).slideUp();
                $(this).next().slideToggle();
            })
        }
         
        if ($('#choose2').prop('checked')) {
            $(".heading").off();
            $(".heading").click(function() {
                $(this).next().slideToggle();
            })

        }
    })
})