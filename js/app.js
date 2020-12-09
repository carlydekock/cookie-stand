'use strict';


// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var seattleList = document.getElementById('seattle');
// var tokyoList = document.getElementById('tokyo');
// var dubaiList = document.getElementById('dubai');
// var parisList = document.getElementById('paris');
// var limaList = document.getElementById('lima');
var storeTable = document.getElementById('table');
var tableHeader = document.getElementById('header');
var tableFooter = document.getElementById('footer');
var stores = [];

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
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  //iteratively create, give hourly sales content, and append to the DOM
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  // add total to the end of the row
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

function renderHeader(){
  var trElement = document.createElement('tr');
  tableHeader.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = 'Stores';
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  //Add Daily Location Total in cell at end of header
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total';
  trElement.appendChild(thElement);
}
//This is the start of trying to get the footer on the table to render with totals
function renderFooter(){
  var trElement = document.createElement('tr');
  tableFooter.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);
  var allStoresDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var allStoresHourlyTotal = 0;
    for (var j = 0; j < stores.length; j++) {
      allStoresHourlyTotal += stores[j].hourlySales[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = allStoresHourlyTotal;
    trElement.appendChild(tdElement);
    allStoresDailyTotal += allStoresHourlyTotal;
    console.log(allStoresDailyTotal);
  }
  //Add final grand total in bottom right corner of table
  tdElement = document.createElement('td');
  tdElement.textContent = allStoresDailyTotal;
  trElement.appendChild(tdElement);
}

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


