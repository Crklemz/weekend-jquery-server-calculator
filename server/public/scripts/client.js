console.log('js');

$(handleReady);

function handleReady() {
    console.log('JQ');

    //click listeners
    $('#addBtn').on('click', handleAdd);
    $('#subBtn').on('click', handleSubtract);
    $('#multBtn').on('click', handleMultiply);
    $('#divBtn').on('click', handleDivide);
    $('#calcBtn').on('click', handleCalulate);
    $('#clrBtn').on('click', handleClear);

    //functions to call on ready
    
}

function handleAdd() {
    console.log('clicked addBtn');
    
}

function handleSubtract() {
    console.log('clicked subBtn');
    
}

function handleMultiply() {
    console.log('clicked multBtn');
    
}

function handleDivide() {
    console.log('clicked divBtn');
    
}

function handleCalulate() {
    console.log('clicked calcBtn');
    
}

function handleClear() {
    console.log('clicked clrBtn');
    
}