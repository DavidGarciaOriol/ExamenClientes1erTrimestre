$(document).ready(function(){

    var appArr = [];

    $("#appName").keyup(function(event) { 
        let appName = $("#appName").val();
        let nameExpresion = /^[A-Z]+$/g;
        
        if(!nameExpresion.test(appName.value)){
            $("#appName").removeClass('validImput');
            $("#appName").addClass('errorInput');
            let errAppName = $("<p> El nombre de la aplicación solo admite letras mayúsculas. </p>");
            $("#appName").append(errAppName);
        } else{
            $("#appName").removeClass('errorImput');
            $("#appName").addClass('validImput');
            $("#appName").remove(errAppName);
        }  
    });

    $("#appId").keyup(function(event) { 
        let appId = $("#appId").val();
        let idExpresion = /^[0-9A-Fa-f]{6}[-]{1}[0-9]{1}[A-Z]{1}+$/g;
        if(!idExpresion.test(appId.value)){
            $("#appId").removeClass('validImput');
            $("#appId").addClass('errorInput');
            let errAppId = $("<p> El campo debe contener un código hexadecimal, seguido de un guión, el primernúmero de su DNI y la letra de dicho DNI. </p>");
            $("#appId").append(errAppId);
        } else{
            $("#appId").removeClass('errorImput');
            $("#appId").addClass('validImput');
            $("#appId").remove(errAppId);
        }
    }); 

    $("#appDni").keyup(function(event) { 
        let appDni = $("#appDni").val();
        let idExpresion = /^[0-9]{8}[A-Z]{1}+$/g;
        if(!idExpresion.keyup(appDni.value)){
            $("#appDni").removeClass('validImput');
            $("#appDni").addClass('errorInput');
            let errAppDni = $("<p> El campo DNI debe contener 8 números seguidos de una letra mayúscula. </p>";
            $("#appDni").append(errAppDni);
        } else{
            $("#appDni").removeClass('errorImput');
            $("#appDni").addClass('validImput');
            $("#appDni").remove(errAppDni);
        }
    }); 

    $("#appTime").keyup(function(event) { 
        let appTime = $("#appTime").val();
        if(!(parseInt(appTime) >= 200 && parseInt(appTime) <= 1000)){
            $("#appTime").removeClass('validImput');
            $("#appTime").addClass('errorInput');
            let errAppTime = $("<p> El tiempo no debe ser menor a 200 horas ni mayor a 1000 horas. </p>");
            $("#appDni").append(errAppTime);
        } else{
            $("#appTime").removeClass('errorImput');
            $("#appTime").addClass('validImput');
            $("#appTime").remove(errAppTime);
        }
    }); 

    $("#appLang").keyup(function(event) { 
        let appLang = $("#appLang").val();
        let idExpresion = /^[0-9A-Za-z#]+$/g;
        if(!idExpresion.test(appLang.value)){
            $("#appLang").removeClass('validImput');
            $("#appLang").addClass('errorInput');
            let errAppLang = $("<p> El lenguaje del proyecto permite solo letras, números y el símbolo #.</p>");
            $("#appLang").append(errAppLang);
        } else{
            $("#appLang").removeClass('errorImput');
            $("#appLang").addClass('validImput');
            $("#appLang").remove(errAppLang);
        }
    }); 

    $("#appAutor").keyup(function(event) { 
        let appAutor = $("#appAutor").val();
        let idExpresion = /^([A-Z]{1}[a-z][" "]){2}([A-Z]{1}[a-z]){1}+$/g;
        if(!idExpresion.test(appAutor.value)){
            $("#appAutor").removeClass('validImput');
            $("#appAutor").addClass('errorInput');
            let errAppAutor = $("<p> El campo permite Nombres y Apellidos, empezando por mayúsculas cada uno, y con espacio entre ellos.</p>");
            $("#appAutor").append(errAppAutor);
        } else{
            $("#appAutor").removeClass('errorImput');
            $("#appAutor").addClass('validImput');
            $("#appAutor").remove(errAppAutor);
        }
    });

    let appTheme = $("#appTheme").val();

    $("#submit").click(function(event) { 
        event.preventDefault();
        var webApp = new AplicacionesWeb(appName, appTheme, appLang, appTime, appAutor, appDni, appId);
        appArr.push(webApp);
    });
});