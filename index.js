$(document).ready(function(){
    
    $("#nav").mousedown(function(){
        alert("Call us Today!");
    });
    
    $("#flip").click(function(){
        $(".container2").slideToggle("slow");
    });
    
    
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    
    $('img').fadeIn(5000);
    
    
    
});