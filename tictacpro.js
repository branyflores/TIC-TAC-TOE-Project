

$(document).ready(function(){
    const x = "x";
    const o = "o";
    let turns = 0;
    
//li spots
    const spot1 = $('#spot1');
    const spot2 = $('#spot2');
    const spot3 = $('#spot3');
    const spot4 = $('#spot4');
    const spot5 = $('#spot5');
    const spot6 = $('#spot6');
    const spot7 = $('#spot7');
    const spot8 = $('#spot8');
    const spot9 = $('#spot9');

$('#board li').on('click', function(){ ////////CLICK FUNCTION FOR LI'sSPOTS
if ($(this).hasClass('disable')){
    return 
}
 if (turns % 2 == 0) {
     turns++;
     $(this).text("o");
     $(this).addClass('disable o');
 } else { 
     turns++;
    $(this).text("x");
    $(this).addClass('disable x');

 }

    if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') || //
    spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
    spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
    spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
    spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
    spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
    spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
    spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) 
           
    {alert ("Winner: o");
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
          $('#board li').removeClass('x');

} else if  (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') || 
        spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
        spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
        spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
        spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
        spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
        spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
        spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') )
        

         { alert("Winner: x");
       $('#board li').text('+');
       $('#board li').removeClass('disable');
       $('#board li').removeClass('o');
       $('#boadr li').removeClass('x');
         }

//reset bottom:
  //$('#board li').on('click', function(){

    $('#reset').click(function(){
        $('#board li').text('+');
        $('#board li').removeClass('disable');
        $('#board li').removeClass('o');
        $('#boadr li').removeClass('x');
        turns = 0;
    
    
       })

    

})


})
//   

//        } else if (turns == 9){
//         $('#board li').text('+');
//         $('$board li').removeClass('disable');
//         $('#board li').removeClass('o');
//         $('#board li').removeClass('x');

//        } else if ($(this).hasClass('disable')){
//            alert('This spot in already filled');

//        } else if (turns % 2 == 0) {
//            turns++;
//            $(this).text(o);
//            $(this).addClass('disable o');
           

//        }
    




// })

