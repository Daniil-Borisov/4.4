// $(document).ready(function(){    
//     $(".heading").click(function(){
//         $('input:radio').click(function(){
//             $('.description').slideUp();
//         })
        
//         if ($('#choose1').prop('checked')){            
//             $('.description').not($(this).next()).slideUp();
//             $(this).next().slideToggle();
//         }
         
//         if ($('#choose2').prop('checked')) {
//             $(this).next().slideToggle();
//         }
//     })
// })

const item = document.querySelectorAll('.heading'),
        block = document.querySelectorAll('.description'),
        radio = document.querySelectorAll('input')

function variant1(el){
    el.nextElementSibling.classList.toggle('active')
}

function variant2(el){
    el.nextElementSibling.classList.add('super')
    block.forEach(function(el){ 
        if (!el.classList.contains('super')){
            el.classList.remove('active');
        }
    })                 
    el.nextElementSibling.classList.toggle('active');
    el.nextElementSibling.classList.remove('super');
}

item.forEach(function(el){
    el.addEventListener('click', function() {
        choose2.onchange = function(){
            block.forEach(function(elem){
                elem.classList.remove('active')
            })
        }
        if (choose1.checked === true){
        variant1(el);
        }
        if (choose2.checked === true){
            variant2(el);
        }
    })
})