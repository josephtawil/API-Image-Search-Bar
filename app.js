$(document).ready(function () {
    var api_key = "5XFDXRG4rTtPCpIW60ETmDoiVZ3LP6CG";
    var userInput = "";

    $("#button").on("click", function (e) {
        e.preventDefault();

        userInput = $("#text").val();

        console.log(userInput);

        $("#userInput").val("");

        $.ajax({
            type: "GET",
            url: `https://api.giphy.com/v1/gifs/search?q=${userInput}&trending&limit=1&api_key=${api_key}`,
            dataType: "json",
        }).then(function (response) {
            console.log(response);
            // var randomNum = Math.floor(Math.random() * response.data.length);
            for (var i = 0; i < response.data.length; i++) {
                var still = response.data[i].images.original_still.url;
                var gif = response.data[i].images.original.url;
                $("body").append(`<img class="gif" data-still =${still} data-gif =${gif} src= ${still}></img>`);
            }
            // var randomNum = Math.floor(Math.random() * response.data.length);
            // $("body").append(response.data.length[randomNum]);
            // $("body").remove("");
        });

        $(document).on("click", ".gif", function () {
            //this will remove the picture when clicking on it
            //we are setting the src of the image to empty when clicking on it.
            $(this).attr("src", "");
        });
    });
});
