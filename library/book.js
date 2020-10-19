/* Global vars */
const bookshelf = document.querySelector("#bookshelf");
const new_book_btn = document.querySelector("#new");
const form = document.querySelector("form");
let myLibrary = [];

/* Constructors */
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Initialize library
updateLibrary();

/* Event listeners */
// Form
form.addEventListener('submit', handleNewBookForm);

const show_form = document.querySelector(".overlay");
new_book_btn.addEventListener('click', () => {
    show_form.style.display = "block";
})

const cancel_form_btn = document.querySelector("#cancel-form");
cancel_form_btn.addEventListener('click', () => {
    show_form.style.display = "none";
    form.reset();
});

// Book
function addBookEventListeners() {
    const remove_btns = document.querySelectorAll(".remove");
    remove_btns.forEach(button => {
        button.addEventListener('click', removeBookFromLibrary);
    })    

    const toggle_read_btn = document.querySelectorAll(".toggle-read");
    toggle_read_btn.forEach(button => {
        button.addEventListener('change', updateBookReadInstance);
    })
}

/* Functions */
function updateLibrary () {
    let localLibrary = getLibraryFromLocalStorage();
    bookshelf.innerHTML = "";
    // Check for library in local storage
    if (localLibrary) {
        myLibrary = localLibrary;
    }
    // If library is empty display message
    if (myLibrary.length === 0) {
        document.querySelector("#empty-library").style.display = "block";
    } else {
        document.querySelector("#empty-library").style.display = "none";
        // Loop through each object in library, displaying it on page
        myLibrary.forEach((item, index) => {
            let book = document.createElement('div');
            book.classList.add("card");
            // Attach array-index of book to book's div
            book.setAttribute("data-index", index);
            let read;
            if (item.read) {
                read = 'checked';
            }
            book.innerHTML =    `<a title="Remove book from library" class="remove">X</a>
                                <img src="media/books.png" alt="books">
                                <div class="container">
                                    <h4><b>${item.title}</b></h4>
                                    <p><i>by ${item.author}</i> (${item.pages} pages)</p>
                                    <label class="switch">
                                        <input type="checkbox" class="toggle-read" ${read}>
                                        <span class="slider"><div class="slider-label">READ</div></span>
                                    </label>
                                </div>`
            bookshelf.appendChild(book);
            addBookEventListeners();
        });
    }
}

function handleNewBookForm(e) {
    e.preventDefault();
    show_form.style.display = "none";
    const title = form.elements[0].value;
    const author = form.elements[1].value;
    const pages = form.elements[2].value;
    const read = form.elements[3].checked;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    form.reset();
    updateLibrary();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateLocalStorage();
    updateLibrary();
}

function removeBookFromLibrary(e) {
    // Get data-index from parent div
    let index = e.target.parentNode.getAttribute("data-index");
    myLibrary.splice(index, 1);
    updateLocalStorage();
    updateLibrary();
}

function updateBookReadInstance(e) {
    // Get data-index from great-grandparent div
    let index = e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
    if (this.checked) {
        myLibrary[index].read = true;
    } else {
        myLibrary[index].read = false;
    }
    updateLocalStorage();
}


function getLibraryFromLocalStorage() {
    try {
        let localLibrary = JSON.parse(localStorage.getItem("myLibrary"));
        return localLibrary;
    } catch(e) {
        console.log(e.code);
        return false;
    }
}

function updateLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}