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

let equationObject = {};

function handleCalculate() {
    console.log('clicked calcBtn');
    //get input from DOM
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();

    //create objects from input to send to server
    equationObject.num1 = num1;
    equationObject.num2 = num2;
    console.log('The numbers are', equationObject);
    


}//end handleAdd

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



/*****************************************************************
Notes to help:
$.ajax({
    method: 'POST', // Posting information. 
    url: '/guesses', // Called a "route".
    data: guesses, 
  }).then(function (response) { // .then handles happy things; 2XX responses.
    console.log(response);
  }).catch(function (error) { // .catch handles bad things; 4XX or 5XX errors. 
    console.log(error)
    alert('Something went wrong with GET, try again.')
  }) // End Ajax .then and .catch functions. 
  // ⬇ Getting those guesses from the server:
  $.ajax({
    method: 'GET',
    url: '/results'
  }).then(function (response) {
    console.log(response);
    renderDom(response);
  }).catch(function (error) {
    console.log(error);
    alert('Something went wrong with GET')
  })
} // End clickedSubmit function. 
*******************************************************************/














// function handleSubtract() {
//     console.log('clicked subBtn');
    
// }

// function handleMultiply() {
//     console.log('clicked multBtn');
    
// }

// function handleDivide() {
//     console.log('clicked divBtn');
    
// }

// function handleCalulate() {
//     console.log('clicked calcBtn');
    
// }

// function handleClear() {
//     console.log('clicked clrBtn');
    
// }