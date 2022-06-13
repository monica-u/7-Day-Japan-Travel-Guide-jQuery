$(document).ready(function() {
    console.log( "ready!" );
    //$("button").html("Next Step...");
    
    $("#cantmiss").hover(function() {
        $(this).css("color", "black");},
        function(){
        $(this).css("color","rgb(239, 203, 74)");}
    )
    $("button").click(function(){
        alert("Clicked");
        window.location.href="https://japanrailpass.net/en/purchase.html";
        });
    }
        
        )

  
