$(".button").click(function() {
    $(".object").delay(5000).slideToggle(900);
    
});
$(".control2").mouseenter(function() {
    $(".object2").fadeToggle(900);
    
});
$(".control3").click(function() {
    $(".object3").toggle(900);
    
});
$(".control4").dblclick(function() {
    $(".object4").slideToggle(900);
    
});
$(".control5").dblclick(function() {
    $(".button").hide();
    $(".control2").hide();
    $(".control3").hide();
    $(".control4").hide();
    $(".object").hide();
    $(".object2").hide();
    $(".object3").hide();
    $(".object4").hide();
    $(".object5").slideToggle();
    
});