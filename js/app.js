'use strict';


// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var storeTable = document.getElementById('table');
var tableHeader = document.getElementById('header');
var tableFooter = document.getElementById('footer');
var stores = [];

// Step 1 - get usable data out of form, save to variable
var myForm = document.getElementById('container');

// create constructor function to create store
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  stores.push(this);
}

Store.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
    this.hourlySales[i] = hourlyTotal;
    this.dailyTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  this.calculateHourlySales();
  //create row and append to the DOM
  var trElement = document.createElement('tr');
  storeTable.appendChild(trElement);
  //create first cell in row, give it name and append to DOM
  renderElement('th', this.name, trElement);
  //iteratively create, give hourly sales content, and append to the DOM
  for (var i = 0; i < this.hourlySales.length; i++) {
    renderElement('td', this.hourlySales[i], trElement);
  }
  // add total to the end of the row
  renderElement('td', this.dailyTotal, trElement);
};

//Create function to render new element - to dry out code
function renderElement (elementCreated, content, parentElement){
  var childElement = document.createElement(elementCreated);
  childElement.textContent = content;
  parentElement.appendChild(childElement);
}


function renderHeader(){
  var trElement = document.createElement('tr');
  tableHeader.appendChild(trElement);
  renderElement('th', 'Stores', trElement);
  for (var i = 0; i < hours.length; i++){
    renderElement('th', hours[i], trElement);
  }
  //Add Daily Location Total in cell at end of header
  renderElement('th', 'Daily Location Total', trElement);
}
// This is the start of trying to get the footer on the table to render with totals
function renderFooter(){
  var trElement = document.createElement('tr');
  tableFooter.appendChild(trElement);
  renderElement('th', 'Totals', trElement);
  var allStoresDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var allStoresHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++) {
      allStoresHourlyTotal += stores[j].hourlySales[i];
    }
    renderElement('td', allStoresHourlyTotal, trElement);
    allStoresDailyTotal += allStoresHourlyTotal;
  }
  //Add final grand total in bottom right corner of table
  renderElement('td', allStoresDailyTotal, trElement);
}

// Step 3: event handler
function handleSubmit(event){
  event.preventDefault();
  var storeName = event.target.store.value;
  // console.log(storeName);
  var customerMin = parseInt(event.target.min.value);
  // console.log(customerMin);
  var customerMax = parseInt(event.target.max.value);
  // console.log(customerMax);
  var cookieSalesAvg = parseInt(event.target.avg.value);
  // console.log(cookieSalesAvg);
  var newStore = new Store(storeName, customerMin, customerMax, cookieSalesAvg);
  newStore.render();
  //Need to clear current footer, and update with new information
  document.getElementById('footer').innerHTML = '';
  var trElement = document.createElement('tr');
  tableFooter.appendChild(trElement);
  renderElement('th', 'Totals', trElement);
  var allStoresDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var allStoresHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++) {
      allStoresHourlyTotal += stores[j].hourlySales[i];
    }
    renderElement('td', allStoresHourlyTotal, trElement);
    allStoresDailyTotal += allStoresHourlyTotal;
  }
  //Add final grand total in bottom right corner of table
  renderElement('td', allStoresDailyTotal, trElement);
}

// Instantiations of stores
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll(){
  for (var i = 0; i < stores.length; i++){
    stores[i].render();
  }
}

renderAll();
renderHeader();
renderFooter();


// Step 2 - add event listener
myForm.addEventListener('submit', handleSubmit);
