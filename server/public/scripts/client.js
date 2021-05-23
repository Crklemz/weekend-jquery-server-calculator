console.log('js');

$(handleReady);

function handleReady() {
    console.log('JQ');

    //click listeners
    $('#addBtn').on('click', clickedAdd);
    $('#subBtn').on('click', clickedSubtract);
    $('#multBtn').on('click', clickedMultiply);
    $('#divBtn').on('click', clickedDivide);
    $('#calcBtn').on('click', handleCalculate);
    // $('#clrBtn').on('click', clickedClear);

    //functions to call on ready
    
}
//to hold the values of the numbers enetered and 
//the operator button clicked
let equationObject = {}; 

function handleCalculate() {
    console.log('in handleCalculate');
    //get input from DOM
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();

    //create objects from input to send to server
    equationObject.num1 = num1;
    equationObject.num2 = num2;
    console.log('The numbers are', equationObject);
    
    $.ajax({
        method: 'POST', //posting info for server
        url: '/equationObjects', //route to server
        data: equationObject, //data to send
    }).then(function (response) { // 2XX responses.
        console.log(response);
      }).catch(function (error) { //4XX or 5XX errors. 
        console.log(error)
        alert('Something went wrong with GET, try again.')
      })//end ajax post
    $.ajax({
    method: 'GET',
    url: '/results'
  }).then(function (response) {
    console.log(response);
    renderDom(response);
  }).catch(function (error) {
    console.log(error);
    alert('Something went wrong with GET')
  })//end ajax get
}//end handleAdd

function renderDom(info) {
    // Appending current result to DOM: 
    $('#currentResultDisplay').append(`    
        <h2>${info[0]}</h2> 
    `);

    //for loop to display ul of previous results

  }

//functions to pass the value of the button clicked to the 
//equationObject as a way of getting the values of the 
//buttons clicked (+, -, *, /)
function clickedAdd() {
    console.log('in clickedAdd');
    equationObject.operator = '+';
}

function clickedSubtract() {
    console.log('in clickedSubtract');
    equationObject.operator = '-';
}

function clickedMultiply() {
    console.log('in clickedMultiply');
    equationObject.operator = '*'
}

function clickedDivide() {
    console.log('in clickedDivide');
    equationObject.operator = '/'
}

