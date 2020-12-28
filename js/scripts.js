
$( document ).ready(function() { 
	$('.suc').click ( function() {
	$('#ModalWindow').html ('<div id="garbage_tag_1" ><div class="alert alert-success hidden" role="alert" id="successMessage"><strong>Внимание!</strong> Ваше сообщение успешно отправлено.</div></div>');
});


$(document).mouseup(function (e) {
	var container = $("#garbage_tag_1");
	if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(window).scroll(function(){
	if ($('.navbar').offset().top > 1) {
        $('.navbar').css("background-color","#007bff");
    	$('a.nav-link').css("color","black");
    }
    else {
           $('.navbar').css("background", "none");
//   		$(".nav-link").hover(function(){
//   		$(this).css("color", "white");}, 
			// function () {
//  $(this).css("color", "white");
// });    
$('a.nav-link').css("color","#ff5500");    
		}
						});

								

 $(document).ready(function(){
        $(".scrollup").hide();

        $(function (){
            $(window).scroll(function (){
                if ($(this).scrollTop() > 100){
                    $('.scrollup').fadeIn();
                } else{
                    $('.scrollup').fadeOut();
                }
            });
 $('.scrollup').click(function (){
                $('html').animate({
                    scrollTop:0
                }, 800);
               
            });
           
            });
        });
								});



