$(document).ready(function () {

    $("#appName").focus(function (event) { 

        event.preventDefault();

        let appName = $("#appName").val();
        
        if(!appName.match(/([A-Z])\w+/)){

            $("#appName").attr('border-color','red');
            let errMsg = $("<p>")

        }
        
    });
    
    
    
});