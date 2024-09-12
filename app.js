console.log("fancy");

// we need to store two global values: cookie count and cookies per second

let cookieCount = 0;
let cookiesPerSecond = 0;

or;

//if you choose the stats object, you don't need the global variables above
let stats = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

//============================================================================

//DOM manipulation
//select the DOM elements (buttons, imgs, p, etc.)

//a way to store the shop upgrades that come from the API

let shopUpgrades = [*upgrades in here*];

//fetch the items from the API --> https://cookie-upgrade-api.vercel.app/api/upgrades
async function getShopUpgrades(){
//fetch data
//translate into JSON
//push items into the shopUpgrades arry above
};

//an event listener to click on te cookie button
//select the cookie img or button
//write your event handler and event listener 
function handleCookieClick(){
//when i click on the cookie the value of cookieCount goes up by one
}

addEventListener("click", handleCookieClick);

setInterval(function(){
    //i want to increase the value of cookieCOunttt by one every second to start with
    //i want to update the value displayed on the page
    updateCookieCount(); //<----also an option
    //i want to store this value in local storage - could also be a function storeLocalStorage()  , you would call this inside the setInterval function
}, 1000
)

function updateCookieCount(){
//this is just one option to update the cookieCount value
}

function storeLocalStorage(){
    //I store the values in local storage - one option also
}


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// extra function blocks to give you ideas
//you might or might not use these oossible solutions to problems you might find

function renderShopUpgrades(){
    //create DOM elements
    //you will use a loop or array method
    shopUpgrades.forEach(function(upgrade){
        //for each item in the array, assgn the value to a DOM element
        //append the element to the DOM
    })
}

function saveLocalStorage(){
    //a method that turns your data into string soup
    //a method to set the data into key and local storage
}