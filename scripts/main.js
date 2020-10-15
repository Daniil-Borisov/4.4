$(document).ready(function(){    
    $(".heading").click(function(){
        $('input:radio').click(function(){
            $('.description').slideUp();
        })
        
        if ($('#choose1').prop('checked')){            
            $('.description').not($(this).next()).slideUp();
            $(this).next().slideToggle();
        }
         
        if ($('#choose2').prop('checked')) {
            $(this).next().slideToggle();
        }
    })
})