$(document).ready(function(){
    $(this).on('click','a',function(e){
        e.preventDefault();
        var category = $(this).attr('href')
        console.log(category)
        $.get('https://opentdb.com/api.php?amount=1&difficulty='+category,function(response){
            console.log(response)
            var category = response.results[0].category
            var difficulty = response.results[0].difficulty
            var Q = response.results[0].question
            var A = []
            correct_answer = response.results[0].correct_answer
            A.push(correct_answer)
            incorrect_answers = response.results[0].incorrect_answers
            for (var answer in incorrect_answers){
                A.push(incorrect_answers[answer])
            }
            for (var i = 0; i < A.length; i++) {
                var answer = A[i]
                for (var j = i - 1; j > - 1 && A[j] > answer; j--) {
                    A[j + 1] = A[j]
                }
                A[j + 1] = answer
            }
            console.log(A)
            var html_body = `
                            <h5>${category}</h5>
                            <h6 class="text-capitalize">${difficulty}</h6>
                            <h4>${Q}</h4>
                            <ul id="answers"></ul>
            `
            $('#placeholder').html(html_body)
            setTimeout(function(){$('#answers').append('<li id="answer">'+A[0]+'</li>')}, 500);
            setTimeout(function(){$('#answers').append('<li id="answer">'+A[1]+'</li>')}, 1000);
            if (A.length > 2){
                setTimeout(function(){$('#answers').append('<li id="answer">'+A[2]+'</li>')}, 1500);
                setTimeout(function(){$('#answers').append('<li id="answer">'+A[3]+'</li>')}, 2000);
            }
        });
    });

    // the below code is working:

    // $('#placeholder').on("mouseover","li",function(){
    //     $(this).css("color","orange")
    // });    

    // but this one is not, only if I tag the entire #placeholder
    
    $('#placeholder li').on({
        mouseenter:function(){
            $(this).css("color","orange");
        },
        mouseleave:function(){
            $(this).css("color","black");
        }
    });
});