// test the js and jquery link
// $(document).on("click", function() {
//     console.log("hello");
//     alert("hello");

// });

// define array of animals
var animals = ["dog", "cat", "rat", "horse", "mouse", "fox", "donkey", "cow"];



// poulate the buttons from the Array

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
    }

}

// click event for add-animal button

$("#add-animal").on("click", function(event) {
    event.preventDefault();
    animal = $("#animal-input").val().trim();
    animals.push(animal);
    renderButtons();

});

// Get API info from giphy 
function displayAnimal() {
    var animal = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(queryURL);
        // show the result in a div
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var animalHolder = $("<div class='results'>");
            animalHolder.append("<p>" + "Rating: " + results[i].rating + "</p>");

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalHolder.append(animalImage);

            $("#animalDiv").prepend(animalHolder);

        }
    })
}



$(document).on("click", ".animal", displayAnimal);

renderButtons();
