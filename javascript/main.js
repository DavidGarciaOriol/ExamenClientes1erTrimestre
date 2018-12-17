$(document).ready(function(){

    var errArr = [];

    var appArr = [];

    $("#appName").keyup(function(event) { 
        let appName = $("#appName").val();
        let nameExpresion = /^[A-Z]$/g;
        let errAppName = $("<p> El nombre de la aplicación solo admite letras mayúsculas. </p>");

        if(!nameExpresion.test(appName.value)){
            $("#appName").removeClass('validInput');
            $("#appName").addClass('errorInput');
            $(".formDiv").append(errAppName);

            errArr.push(errAppName);
        } else{
            $("#appName").removeClass('errorInput');
            $("#appName").addClass('validInput');
            $(errAppName).remove();
        }  
    });

    let appTheme = $("#appTheme").val();

    $("#appLang").keyup(function(event) { 
        let appLang = $("#appLang").val();
        let idExpresion = /^[0-9A-Za-z#]$/g;
        let errAppLang = $("<p> El lenguaje del proyecto permite solo letras, números y el símbolo #.</p>");

        if(!idExpresion.test(appLang.value)){
            $("#appLang").removeClass('validInput');
            $("#appLang").addClass('errorInput');
            $(".formDiv").append(errApplang); 
        } else{
            $("#appLang").removeClass('errorInput');
            $("#appLang").addClass('validInput');
            $(errAppLang).remove();
        }
    }); 

    $("#appTime").keyup(function(event) {
        let appTime = $("#appTime").val();
        var errAppTime = $("<p> El tiempo no debe ser menor a 200 horas ni mayor a 1000 horas, tampoco puede ser decmal. </p>");
        
        if(!(parseInt(appTime) >= 200 && parseInt(appTime) <= 1000 && appTime == parseInt(appTime))){
            $("#appTime").removeClass('validInput');
            $("#appTime").addClass('errorInput');
            $(".formDiv").append(errAppTime); 
        } else{
            $("#appTime").removeClass('errorInput');
            $("#appTime").addClass('validInput');
            $(errAppTime).remove();
        }
    }); 

    $("#appAutor").keyup(function(event) { 
        let appAutor = $("#appAutor").val();
        let idExpresion = /^([A-Z]{1}[a-z]{1,}[\s]){2}([A-Z]{1}[a-z]{1,})$/g;
        let errAppAutor = $("<p> El campo permite Nombres y Apellidos, empezando por mayúsculas cada uno, y con espacio entre ellos.</p>");

        if(!idExpresion.test(appAutor.value)){
            $("#appAutor").removeClass('validInput');
            $("#appAutor").addClass('errorInput');
            $(".formDiv").append(errAppAutor);
        } else{
            $("#appAutor").removeClass('errorInput');
            $("#appAutor").addClass('validInput');
            $(errAppAutor).remove();
        }
    });

    $("#appDni").keyup(function(event) { 
        let appDni = $("#appDni").val();
        let idExpresion = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        let errAppDni = $("<p> El campo DNI debe contener 8 números seguidos de una letra mayúscula. </p>");

        if(!idExpresion.test(appDni.value)){
            $("#appDni").removeClass('validInput');
            $("#appDni").addClass('errorInput');
            $(".formDiv").append(errAppDni);
        } else{
            $("#appDni").removeClass('errorInput');
            $("#appDni").addClass('validInput');
            $(errAppDni).remove();
        }
    }); 

    $("#appId").keyup(function(event) { 
        let appId = $("#appId").val();
        let idExpresion = /[0-9a-fA-F]{6}[-]{1}[0-9]{1}[A-Z]{1}/i;
        let errAppId = $("<p> El campo debe contener un código hexadecimal, seguido de un guión, el primernúmero de su DNI y la letra de dicho DNI. </p>");

        if(!idExpresion.test(appId.value)){
            $("#appId").removeClass('validInput');
            $("#appId").addClass('errorInput');
            $(".formDiv").append(errAppId);
        } else{
            $("#appId").removeClass('errorInput');
            $("#appId").addClass('validInput');
            $(errAppId).remove();
        }
    }); 



    $("#submit").click(function(event) { 

        event.preventDefault();

        var webApp = new AplicacionesWeb(appName, appTheme, appLang, appTime, appAutor, appDni, appId);
        appArr.push(webApp);
        
    });
});