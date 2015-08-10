$(document).ready(function () {

    /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="open"></span>'
    var xMark = '<span class="delete"></span>'

    /*Allows an "Enter" keys to work as a submit button for input field*/
    function getItem() {
        $('#Input-Value').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    /*Adds input item to list*/
    function postItem() {
        var item = $('#Input-Value').val();
        var work = '<p class="active">'+ checkMark + item + xMark + '</p>';
        $('#list-area').prepend(work);
        $('#Input-Value').val('');
        $('#list-area p:first-child')
        .css('opacity', "0")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

    function crossOff(){
        $('.cross-off').toggle(function () {
            $(this).closest('p').addClass("strikethrough");
            console.log("Stricken")
        }, function () {
            $(this).closest('p').removeClass("active");
        });
    }

});

/*Clears all items on list*/
$(document).on("click", "#reset", function(){
    $("#list-area").empty();
    submissions = 0;
});

/*Allows user to delete items*/
$(document).on("click", ".delete", function(){
    $(this).closest('p').fadeOut(300);
});

/*Allows user to check off items*/
$(document).on("click", ".open", function(){
    if (!$(this).closest('p').hasClass('complete')) {
        console.log("I am going to complete");
        $(this).closest('p').addClass("complete");
        $(this).siblings('.delete').addClass("delete-2");
        $(this).addClass("check");
   }
   else {
        console.log("I am going to make active");
        $(this).closest('p').removeClass("complete");
        $(this).siblings('.delete').removeClass("delete-2");
        $(this).removeClass("check");
   }
});