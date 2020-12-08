'use strict';


// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');

//1st object - get it to work - Seattle Store
var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,

  //get random number between min and max for number of customers
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  //calculate hourlysales total and populate hourly sales aray
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.getRandomNumber());
      // var calcSales = this.getRandomNumber() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      // console.log(calcSalesRound);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  //render list with total at the end
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      //Proof I can get here!
      console.log('inside render method');
      //create element
      var liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      //append it to the DOM
      seattleList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

seattleStore.render();
console.log(seattleStore.hourlySales);

//2nd object - Tokyo Store
var tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  //get random number between min and max for number of customers
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  //calculate hourlysales total and populate hourly sales aray
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.getRandomNumber());
      // var calcSales = this.getRandomNumber() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      // console.log(calcSalesRound);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  //render list with total at the end
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      //Proof I can get here!
      console.log('inside render method');
      //create element
      var liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      //append it to the DOM
      tokyoList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

tokyoStore.render();

//3rd object - Dubai
var dubaiStore = {
  name: 'dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  hourlySales: [],
  dailyTotal: 0,

  //get random number between min and max for number of customers
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  //calculate hourlysales total and populate hourly sales aray
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.getRandomNumber());
      // var calcSales = this.getRandomNumber() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      // console.log(calcSalesRound);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  //render list with total at the end
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      //Proof I can get here!
      console.log('inside render method');
      //create element
      var liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      //append it to the DOM
      dubaiList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

dubaiStore.render();


//4th object - Paris
var parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlySales: [],
  dailyTotal: 0,

  //get random number between min and max for number of customers
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  //calculate hourlysales total and populate hourly sales aray
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.getRandomNumber());
      // var calcSales = this.getRandomNumber() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      // console.log(calcSalesRound);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  //render list with total at the end
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      //Proof I can get here!
      console.log('inside render method');
      //create element
      var liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      //append it to the DOM
      parisList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

parisStore.render();


//5th object - Lima
var limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  hourlySales: [],
  dailyTotal: 0,

  //get random number between min and max for number of customers
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  //calculate hourlysales total and populate hourly sales aray
  calculateHourlySales() {
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.getRandomNumber());
      // var calcSales = this.getRandomNumber() * this.avg;
      var calcSalesRound = Math.ceil(this.getRandomNumber() * this.avg);
      // console.log(calcSalesRound);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  //render list with total at the end
  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      //Proof I can get here!
      console.log('inside render method');
      //create element
      var liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      //append it to the DOM
      limaList.appendChild(liElement);
    }
    liElement.textContent = `Total: ${this.dailyTotal} cookies`;
  }
};

limaStore.render();


