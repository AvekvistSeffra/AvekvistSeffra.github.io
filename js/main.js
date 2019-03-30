$(document).ready(function() {
    var initialize = function() {
        if($(document).width() <= 960) {
            if($("#inner-nav").css("display") != "none")
                $("#inner-nav").toggle();
        } else {
            if($("#inner-nav").css("display") == "none")
                $("#inner-nav").toggle();
        }
    }

    initialize();

    $("#handle").on("click", function() {
        $("#inner-nav").toggle();
    });

    $(window).resize(function() {
        initialize();
    });
});
