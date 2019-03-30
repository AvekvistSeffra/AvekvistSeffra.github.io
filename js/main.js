var baseNavPadding;
var navHeight;

$(document).ready(function() {
    baseNavPadding = parseInt($("#inner-nav a").css("padding-top")) * 2;
    var initialize = function() {
        navHeight = $("#handle").height() * 4 + baseNavPadding;

        if($(document).width() <= 960) {
            if($("#inner-nav").css("display") != "none") {
                $("#inner-nav").css("display", "none");
                $("#inner-nav").css("height", 0);
            }
        } else {
            if($("#inner-nav").css("display") == "none")
                $("#inner-nav").css("display", "grid");
        }
    }

    initialize();

    $("#handle").on("click", function() {
        if($("#inner-nav").css("display") == "none") {
            $("#inner-nav").css("display", "grid");
            $("#inner-nav").animate({
                height: navHeight,
            }, 500);
        } else {
            $("#inner-nav").animate({
                height: 0,
            }, 500, function() {
                $("#inner-nav").css("display", "none");
            });
        }
    });

    $(window).resize(function() {
        baseNavPadding = parseInt($("#inner-nav a").css("padding-top")) * 2;
        console.log(baseNavPadding);
        initialize();
    });
});
