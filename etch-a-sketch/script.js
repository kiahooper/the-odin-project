// Default and max size (x) of grid meant x by x
const defaultSize = 16;
const maxSize = 100;

// By default sketching will be from white to black
let randomColor = false;
let darken = false;

document.addEventListener('DOMContentLoaded', function() {

    // Create default grid
    createGrid(defaultSize);

    // Initialize refresh button
    refresh_btn = document.querySelector("#refresh");
    refresh_btn.addEventListener('click', () => window.location.reload());

    // Initialize grid button 
    grid_btn = document.querySelector("#grid");
    grid_btn.addEventListener('click', defineGridSize);

    // Initialize random color button
    randomColor_btn = document.querySelector("#randomColor");
    randomColor_btn.addEventListener('click', chooseEffect);

    // Initialize gradually darkening button
    darken_btn = document.querySelector("#darken");
    darken_btn.addEventListener('click', chooseEffect);

});

function createGrid(x) {

    // Access CSS variable to decide number of columns x number of rows
    let root = document.documentElement;
    root.style.setProperty('--x', x);
     
    // Clear existing elements in container-div
    const container = document.querySelector("#container");
    container.innerHTML = '';

    // Create specified number of pixels in container
    for (i=0; i<(x*x); i++) {
    let pixel = document.createElement('DIV');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
    }
    
    // Only allow drawing to happen if mouse is clicked 
    let mouseDown = false;
    container.addEventListener('mousedown', function() {mouseDown = true});
    container.addEventListener('mouseup', function(){mouseDown = false}); 

    // Change color gradually when mouse hover over all elements in container if mouse is clicked
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            if (mouseDown) {
                if (randomColor){
                    randomColorChoice(pixel);
                } else if (darken) {
                    darkenColorGradually(pixel);
                } else {
                    pixel.style.backgroundColor = "black";
                }
            }
        })
    })
}

function defineGridSize() {
    
    // Uncolor the pixels from previous hover events
    pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "";
    });

    // Prompt for new grid-size, not too high as it worsens user experience
    let x = prompt("\nWould you like another grid size? \nPlease enter one number below. \n\n(If left empty, default grid size will be chosen.)");
    while (x > maxSize) {
        x = prompt(`For best experience, please select a number below ${maxSize}.`);
    }
    // if no number is given, default value is used
    if (!x) {
        createGrid(defaultSize);
    }
    createGrid(x);
}

function chooseEffect(e) {
    if (e.target.id === "randomColor") {
        if (randomColor === false) {
            // Select randomColor effect
            randomColor = true;
            darken = false;
            // add class that make item appear selected
            e.target.classList.add('chosen');
            const darken_btn = document.querySelector("#darken");
            // remove above class from oposite button
            if (darken_btn.classList != null) {
                darken_btn.classList.remove('chosen');
            }
        } else {
            // Unselect randomColor effect
            randomColor = false;
            e.target.classList.remove('chosen');
        }
    }
    // Same steps as for randomColor (just opposite obviously...)
    else if (e.target.id === "darken") {
        if (darken === false) {
            darken = true;
            randomColor = false;
            e.target.classList.add('chosen');
            const randomColor_btn = document.querySelector("#randomColor");
            if (randomColor_btn.classList != null) {
                randomColor_btn.classList.remove('chosen');
            }
        } else {
            darken = false;
            e.target.classList.remove('chosen');
        }
    }
}

function darkenColorGradually(element) {
    // Access event counter to count how many times element has been passed 
    element.counter = element.counter || 0;
    element.counter++;
    if (element.counter < 10) {
        // Up opacity of color black by 10% until fully black
        element.style.backgroundColor = `rgba(0,0,0,0.${element.counter}`;
    } else {
        element.style.backgroundColor = 'black';
    }
}

function randomColorChoice(element) {
    // Create random color by generating 3 random numbers from 0-255 for RGB
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);
    element.style.backgroundColor = `rgb(${x},${y},${z})`
}
