var sendMessage = (function () {

    var send = function (event) {
        event.preventDefault();
        $.ajax({
            url: "././mail/contact_me.php",
            type: "POST",
            dataType: "json",
            data: {
                name: $("#mce-FNAME").val() + " " + $("#mce-LNAME").val(),
                phone: '',
                email: $("#mce-EMAIL").val(),
                message: $("#mce-MESSAGE").val()
            },
            success: function (data) {
                $('#loader').removeClass('fa-spinner fa-spin');
                vox66Data = data;
                showVox66();
            }
        });
    }

    return {
        init: function () {
            $("#mc-embedded-send").click(send);
        }
    }
});

var message = sendMessage();
message.init();