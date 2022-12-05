/*
NOTES - december 4
for projects like these first we select the elements that we need and then we store the selections into variables

we work with CSS classes in this project's html (class = show-modal). I think this class (show-modal) is to style the pop-up window

classes allow us to aggregate multiple CSS properties in one, like a container
and by adding and removing these classes we can basically activate/deactivate certain styles all at the same time
*/

'use strict';

// 1. SELECT ELEMENTS
// we select elements using the selector:
// limitation - whenever we use query selector for a selector that addresses multiple elements, only the first one will get selected. so we use query selector ALL to get all of em
// now each of these buttons has an event listener function: 

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay'); 
const button_closemodal = document.querySelector('.close-modal');        // to close the pop up window
const buttons_openmodal = document.querySelectorAll('.show-modal');      // the 3 buttons
console.log(buttons_openmodal);      // this returns a node list of the 3 buttons

// 3. FUNCTION: close modal window (to close pop up box if you click outside pop up box AND if you click "x")
const closePopUp = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// 4. FUNCTION: open modal window
const openPopUp = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // debugging: console.log('Button was clicked!');
}

// 2. ATTACH AN EVENT HANDLER TO EACH BUTTON 
// to respond to a button click we will attach an event handler function to the element
// added an event listener to buttons_openmodal (When a button is clicked, show lil pop up box)
// added am event listener to button_closemodal (To close the lil popup box)
// when one of these buttons is clicked we run function defined:

for (let i=0; i < buttons_openmodal.length; i++){
    // show the modal window when button is clicked:
    buttons_openmodal[i].addEventListener('click', openPopUp);

    // close modal window when x button is clicked
    button_closemodal.addEventListener('click', closePopUp)
}

// close modal window when user clicks outside pop up window
overlay.addEventListener('click', closePopUp)

// 3. ADD EVENT LISTENER TO RESPOND TO KEYBOARD EVENTS
// keyboard events are global events, bc they don't happen on one specific element
// e: event (you can call it anything tho - abcdefg). as the keydown occurs javascript will call the function with the event object as an argument
document.addEventListener('keydown', function(e){
    // debug: console.log(e.key);
    // i want to close the modal with esc key, ONLY if the modal is already open ofc
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closePopUp();
    }
});

