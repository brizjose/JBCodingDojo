
$(document).ready(function(){

    // first we prevent the form to submit and refresh the page
    
    $('#notes').submit(function(e){
        e.preventDefault()

        // then we print something in console to see if working

        console.log("the form was submitted")

        // the following will do the form submission for us    
        
        console.log($(this).serialize())

        // we store the url that matches the action="" in the form tag, so we can inject it in the .post() comand that follows; serialize() will convert posted data into json

        var url = $(this).attr('action')
        var data = $(this).serialize()
        $.post(url, data, function(serverResponse){
            console.log(serverResponse)
        }, "json")    
    });
});
