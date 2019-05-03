var clientID = "9jy08wfya60lo99gg8n1lw2hxid56t";
var username = "flargrah";

$(document).ready(function() {
    $.ajax({
        url: 'https://api.twitch.tv/helix/streams?user_login=' + username,
        
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Client-ID", clientID);
        }, success: function(data) {
            var id = data.data[0].game_id;
            $.ajax({
                url: 'https://api.twitch.tv/helix/games?id=' + id,

                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Client-ID", clientID);
                }, success: function(data) {
                    $("#info-text").text(data.data[0].name);
                }
            });
        }
    });

    $("#info-text").animate({
        left: 0,
    }, 3000);
});
