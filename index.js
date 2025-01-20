$(document).ready(function(){
    $(".input").click(function(){
    $('.input').focus(function(){
        $(this).css('background-color', 'hsl(198, 83%, 88%)');
    });
    $(".input").blur(function(){
        $(this).css('background-color','white');
    });
});
    $("#submit").click(function(event){
        event.preventDefault();
        $("#fname").attr("required","true");
    
        if($("#fname").val().trim()===""){
            $("#require").show();
        }
        else if($("#lname").val().trim()===""){
            $("#require1").show();
        }
        else if($("#email").val().trim()===""){
            $("#email").show();
        }
        else if($("#Message").val().trim()===""){
            $("#merr").show();
        }
        else{
            $("#require").hide();
            $("#require1").hide();
            $("#email").hide();
            $("#Message").hide();
            $("#message").addClass("msg1");
            $("#message").removeClass("msg");
            $("#fname").val()==="";
            $("#lname").val()==="";
            $("#email").val()==="";
            $("#Message").val()==="";
        }
    });
});
