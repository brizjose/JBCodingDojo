$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault()
        $.ajax({
            url: $(this).attr('action'),            /* where this will go */
            method: $(this).attr('method'),         /* which http verb */
            data: $(this).serialize(),              /* any data to send along; serialized is easier for server to parse */
            success: function(serverResponse){      /* callback function: code to run when server responds */
                console.log("got the server response, should be rendering via ajax...")
                $('.posts').html(serverResponse)    /* replace html inside div class posts with the response */
            }   
        })
    });
});

