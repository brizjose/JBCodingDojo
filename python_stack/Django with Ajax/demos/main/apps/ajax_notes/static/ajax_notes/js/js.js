
$(document).ready(function(){

    // first we prevent the form to submit and refresh the page
    
    $("#notes").submit(function(event){
        event.preventDefault()

        // then we print something in console to see if working

        console.log("the form was submitted")

        // the following will do the form submission for us    
        
        console.log($(this).serialize())

        // we store the url that matches the action="" in the form tag, so we can inject it in the .post() comand that follows; serialize() will convert posted data into json

        var url = $(this).attr("action")
        var data = $(this).serialize()
        $.post(url, data, function(viewsResponse){
            $("#placeholder").append(viewsResponse)
        }, "html")    
    });

    $('#notes').keypress(function(event){
        if(event.which == 13){
            event.preventDefault()
            var url=$(this).attr("action")
            var data=$(this).serialize()
            $.post(url,data,function(viewsResponse){
                $('#placeholder').append(viewsResponse)
            }, "html")
        }
    })
    
    // $("#form_"+id).keypress(function(event){
    //     if(event.which == 13){
    //         event.preventDefault()
    //         var url=$(this).attr("action")
    //         var id=$(this).attr("data-id")
    //         var data=$(this).serialize()
    //         $.post(url,id,data,function(viewsResponse){
    //             $('#placeholder').append(viewsResponse)
    //         }, "html")
    //     }
    // })

    $("#placeholder").on("click","a",function(event){
        event.preventDefault();
        var id = $(this).attr('data-id')
        console.log("deleted note # "+id) 
        $.ajax({url:$(this).attr("href"), success:$(this).parent().remove()})
    });
    
    $("#placeholder").on("dblclick","h6, p",function(){
        var id = $(this).attr("data-id")
        var content = $(this).html()
        $("#form_"+id).toggle()
        $("#post_"+id).toggle()
        console.log("double click on paragraph id is "+id+" and content is "+content)
        $(document).keydown(function(){
            if (event.which == 27){
            $("#form_"+id).hide()
            $("#post_"+id).show()
            if(event.which == 13){
                event.preventDefault()
                var url=$(this).attr("action")
                var data=$(this).serialize()
                console.log(url, data)
                // $.ajax(url,data,function(viewsResponse){
                //     $("#post_"+id).html(viewsResponse)
                // }, "html")
            }
        }
    });

    })
});

