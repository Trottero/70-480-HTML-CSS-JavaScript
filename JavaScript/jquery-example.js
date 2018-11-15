$('#retrieve-data').click(function () {
    const api = 'https://vps.johnlokerse.nl/stub.xml';

    var xReq = new XMLHttpRequest();
    xReq.open("GET", api, false);
    xReq.send(null);
    $('#display-data').text();

    $.ajax({
        url: "https://vps.johnlokerse.nl/stub.xml",
        // optional: cache: true or false,
        dataType: 'xml',
        type: 'GET',
        success: function (data) {
            $("#ajax-jquery").text(JSON.stringify(data));
        },
        error: function () {
            console.log('Something went wrong!');
        }
    });
});