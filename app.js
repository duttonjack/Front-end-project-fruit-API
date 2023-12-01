// Front end project - requires cors api extension to work
// Get basic $GET call going to 
// Baisc API call working
// Core Feature - get user input regarding calories and use that to display fruits 

$.get("https://www.fruityvice.com/api/fruit/all", (data) => {
  
  $submitInput = $("#submit-input")
  $submitInput.on("click", function(event){
    let $userInput = $("#user-input")
    let input = $userInput.val()
    mainBlock(data, input)
    event.preventDefault()
  });
});

function mainBlock(data, input){
    console.log(input)
    console.log(data)
    let $resultsContainer = $("#results-container")
    $resultsContainer.empty();
    for (element of data){
        if (element.nutritions.calories <= input){
            $resultsContainer.append(`<div>${element.name}: ${element.nutritions.calories}</div>`)
        }
    }
}


