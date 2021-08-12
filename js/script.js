$(document).ready(function(){
    var search = $('#search');
    var openSearch = $('#open-search');

    $(openSearch).click(function(){
        search.fadeToggle();
        if($(this).attr('link') == 'yes'){
            $(this).html(`<i class="fas fa-times"></i>`)
            $(this).attr('link', 'no')
            search.parent().parent().addClass('w-100')
        }else{
            $(this).attr('link', 'yes')
            $(this).html(`<i class="fas fa-search"></i>`)
        }
        


        
    })
    console.log($(document).width())
    


});