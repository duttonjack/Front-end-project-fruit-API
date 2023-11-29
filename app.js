// Front end project - requires cors api extension to work
// Get basic $GET call going to 
// Baisc API call working
// Core Feature - get user input regarding calories and use that to display fruits 

$.get("https://www.fruityvice.com/api/fruit/all", (data) => {
  mainBlock(data)
});

function mainBlock(data){
    console.log(data)
    console.log(data[0].nutritions.calories)

    for (element of data){
        if (element.nutritions.calories < 70){
            console.log(element)
        }
    }
}
