$(document).ready(function(){
   
    
    // STICKY MENU
    
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky")
            }
    });
    
    // ACTIVE LINK
    
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    
    $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
    
    
    
   
    
    
    
    
});


function openNav(){
    document.getElementById("myNav").style.width="60%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}