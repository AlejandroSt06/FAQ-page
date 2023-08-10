const questions = $(".question");
var plus = true;
questions.each(function(index, question) {
    const btn =$(question).find(".question-btn")
    btn.on("click", function() {
        questions.each(function(index, item){
            if(item !== question){
                $(item).removeClass("show-text")
              
              
            }

        });
        $(question).toggleClass("show-text");
       

    });
});
