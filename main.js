let optionArr = [];
const optionList = document.getElementById('optionsDisplay');
const selection = document.getElementById('displaySelection');
const enjoyText = document.getElementById('enjoyText');

// Function for adding a restaurant to the array and display
const addRest = () => {
    const entry = document.getElementById('restaurantInput').value;
    
    // Push entry to options array if not null
    if(entry){
        optionArr.push(entry);
        optionList.innerHTML = '<h2>Your choices:</h2>';
    } else {
        alert('Please Enter a Restaurant...');
    }
  
    displayOptions();

    document.getElementById("inputForm").reset();

}

// iterates through option array to display options with numbering
const displayOptions = () => {   
    for (let index = 0; index < optionArr.length; index++) {
        optionList.innerHTML += '<h3>'+ (index + 1) + ': ' + optionArr[index] + '</h3>';        
    }
}

// Displays the winner
const displayWinner = () => {
    const ranNum = ranNumGenerator();

    // Alters selection div with results and displays other text
    selection.innerHTML = '<h1>Winner:</h1>' +
                            '<h4>' + optionArr[ranNum] + '</h4>';

    enjoyText.innerHTML = '<h3>Enjoy your meal!</h3>';
}

// Generates Random Number based on array size
const ranNumGenerator = () => {
    const randomNum = Math.floor(Math.random() * optionArr.length);

    return randomNum;
}

// Clears the form, all arrays, and div sections that were changed
const clearForm = () => {
    document.getElementById("inputForm").reset();
    optionArr = [];
    optionList.innerHTML = '';
    selection.innerHTML = '';
    enjoyText.innerHTML = '';
    
}