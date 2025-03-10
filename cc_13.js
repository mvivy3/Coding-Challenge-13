// TASK 2: ADDING EMPLOYEE CARDS DYNAMICALLY 

function addEmployeeCard(name, position) { // function to create employee card 
    const employeeContainer = document.getElementById(`employeeContainer`) // create element for employee card
    const card = document.createElement(`div`);
    card.setAttribute("class", "employee-card");
    card.classList.add(`employee-card`);

    // Created heading of employee card
    const employeeName = document.createElement(`h2`);
    employeeName.textContext = name;
    //Created paragraph for employee position
    const employeePosition = document.createElement('p');
     employeePosition.textContent=position;
 
    // Created the remove button
     const removeButton = document.createElement('button');
     removeButton.textContent = 'Remove';
     removeButton.setAttribute("class","remove-button");
     removeButton.addEventListener('click',()=>{
         employeeContainer.removeChild(card);
     });
 
     card.appendChild(employeeName); // heading created
     card.appendChild(employeePosition); // paragraph created
     card.appendChild(removeButton); // remove button for deleting the card
     employeeContainer.appendChild(card);
 
 };
 
 // Test Cases
 addEmployeeCard("Edward Paisley","F1 driver");
 addEmployeeCard("Luciendo Garlawry","F1 presenter");

// TASK 3: CONVERTING NODELISTS TO ARRAYS FOR BULK UPDATES
function addBorderCards(){
    const employeeCards = document.querySelectiorAll("employee-card"); // select all elements 
    const employeeCardsArray = Array.from(employeeCards); // convert the NodeList into an array 
    employeeCardsArray.forEach(Card=>{ // use an array method to update each card's style 
        card.styleborder = `10px purple` // change the color
    });
};
addBorderCards();

// TASK 4: IMPLEMENTING REMOVAL OF EMPLOYEE CARDS WITH EVENT BUBBLING
document.querySelectorAll(".employee-card").forEach(card=>{ // selects all elements with the employee card class
    card.addEventListener("click",(event)=>{
        console.log("Clicked Employee Card");
        event.stopPropagation();  // prevent event from bubblung up to the container
    });
})
