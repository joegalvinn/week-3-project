// we need to store two global values: cookie count and cookies per second

let cookiesCount = 0;
let cookiesPerSecond = 1;

//============================================================================

//DOM manipulation
//select the DOM elements (buttons, imgs, p, etc.)
const cookieButton = document.getElementById("cookie-button");
const resetButton = document.getElementById("reset-button");
const cookiesCountElement = document.getElementById("cookies-count");
const cookiesPerSecondElement = document.getElementById("cookies-per-second");
const shopContainer = document.getElementById("shop");
//a way to store the shop upgrades that come from the API

let shopUpgrades = [
  // upgrades are in here
];

//fetch the items from the API --> https://cookie-upgrade-api.vercel.app/api/upgrades
// async function getShopUpgrades() {
//fetch data
//translate into JSON
//push items into the shopUpgrades arry above

async function getShopUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  shopUpgrades = data;
  renderShopUpgrades();
}
getShopUpgrades();

//an event listener to click on the cookie button
//select the cookie img or button
//write your event handler and event listener
function handleCookieClick() {
  cookiesCount += cookiesPerSecond;
  updateCookieCount();
  //when i click on the cookie the value of cookieCount goes up by one
}

function handleResetButton() {
  cookiesCount = 0;
  cookiesPerSecond = 1;
  updateCookieCount();
}

cookieButton.addEventListener("click", handleCookieClick);
resetButton.addEventListener("click", handleResetButton);

setInterval(function () {
  cookiesCount += cookiesPerSecond;
  //i want to increase the value of cookieCount by one every second to start with
  //i want to update the value displayed on the page
  updateCookieCount(); //<----also an option
  storeLocalStorage();
  //i want to store this value in local storage - could also be a function storeLocalStorage()  , you would call this inside the setInterval function
}, 1000);

function updateCookieCount() {
  cookiesCountElement.textContent = `Cookie count: ${cookiesCount}`;
  cookiesPerSecondElement.textContent = `Cookies per second: ${cookiesPerSecond}`;
  //this is just one option to update the cookieCount value
}

function storeLocalStorage() {
  localStorage.setItem("cookiesCount", cookiesCount);
  localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
  //I store the values in local storage - one option also
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// extra function blocks to give you ideas
//you might or might not use these oossible solutions to problems you might find

function renderShopUpgrades() {
  shopContainer.innerHTML = "";
  //create DOM elements
  // const name = document.createElement("p");
  // const cost = document.createElement("p");
  // const increase = document.createElement("p");
  //you will use a loop or array method
  shopUpgrades.forEach((item) => {
    let makeDiv = document.createElement("div");
    let makeButton = document.createElement("button");
    //for each item in the array, assign the value to a DOM element

    makeButton.textContent = "buy";
    makeButton.id = `item${item.id}`;
    // if (cookiesCount < item.cost) {
    //   makeButton.disabled = true;
    // } else {
    //   makeButton.disabled = false;
    // }
    makeButton.addEventListener("click", () => {
      if (cookiesCount >= item.cost) {
        cookiesCount -= item.cost;
        cookiesPerSecond += item.increase;
        updateCookieCount();
        renderShopUpgrades();
      }
    });
    makeDiv.className = `upgradeBox${item.id}`;
    // makeDiv.className = "upgradeBox";
    makeDiv.textContent = `${item.name} Cost: ${item.cost} Increase: ${item.increase}`;

    //append the element to the DOM
    shopContainer.appendChild(makeDiv);
    shopContainer.appendChild(makeButton);
  });
}
