let optionArr = [];



const addRest = () => {
    const entry = document.getElementById('restaurantInput').value;
    const optionList = document.getElementById('optionsDisplay');
    
    
    // Push entry to options array
    if(entry){
        optionArr.push(entry);
    } else {
        alert('Please Enter a Restaurant...');
    }
    

    // Clear all displayed options before update
    optionList.innerHTML = '<h2>Your choices:</h2>';


    // iterates through option array to display options with numbering
    for (let index = 0; index < optionArr.length; index++) {
        optionList.innerHTML += '<h3>'+ (index + 1) + ': ' + optionArr[index] + '</h3>';        
    }

    document.getElementById("inputForm").reset();

}


const randomize = () => {
    const randomNum = Math.floor(Math.random() * optionArr.length);
    const selection = document.getElementById('displaySelection');

    selection.innerHTML = '<h1>Winner:</h1>' +
                            '<h4>' + optionArr[randomNum] + '</h4>';


}

const clearForm = () => {
    document.getElementById("inputForm").reset();
    optionArr = [];

}