let optionArr = [];

const addRest = () => {
    const entry = document.getElementById('restaurantInput').value;
    const optionList = document.getElementById('optionsDisplay');
    
    // Push entry to options array
    optionArr.push(entry);

    // Clear all displayed options before update
    optionList.innerHTML = '';

    // iterates through option array to display options with numbering
    for (let index = 0; index < optionArr.length; index++) {
        optionList.innerHTML += '<h3>'+ (index + 1) + ': ' + optionArr[index] + '</h3>';        
    }

    

}


const randomize = () => {

}