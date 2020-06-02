jQuery('.custom_swatch_images span').click(function(){
$("#productpopup").addClass('custom_variant_image');
popupshow();
popupopacity();
});


$("body").delegate( "button.productpopup_close_button", "click", function() {
popuphide();
  });

$('button.productpopup_close').on('click',function(){
popuphide();
  });

$(".product-page-popup").on('click',function(e){
if(!$(e.target).closest('.popup-dialog, .product-icons').length){
if($('.product-page-popup').hasClass('custom-ousidepopup')){
popuphide();
}
}
});


function popupopacity(){
$('div#productpopup').css('opacity','1');
}

function popupshow(){
$('.product-page-popup').addClass('custom-ousidepopup');
$('div#productpopup').show();
  
}
function popuphide(){
$('.product-page-popup').removeClass('custom-ousidepopup');
$('div#productpopup').css('opacity','0');
$('div#productpopup').fadeOut();
$("#productpopup").removeClass('custom_variant_image');
}
