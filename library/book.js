// Global vars 
const bookshelf = document.querySelector("#bookshelf");
const new_book_btn = document.querySelector("#new");
const form = document.querySelector("form");
let myLibrary = [];

// Initialize
updateLibrary();

// Event listeners
const show_form = document.querySelector(".overlay");
new_book_btn.addEventListener('click', () => {
    show_form.style.display = "block";
})

const cancel_form_btn = document.querySelector("#cancel-form");
cancel_form_btn.addEventListener('click', () => {
    show_form.style.display = "none";
    form.reset();
});

form.addEventListener('submit', handleNewBookForm);

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

// Constructors
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Functions
function updateLibrary () {
    let localLibrary = getLibraryFromLocalStorage();
    bookshelf.innerHTML = "";
    if (localLibrary) {
        myLibrary = localLibrary;
    }
    if (myLibrary.length === 0) {
        document.querySelector("#empty-library").style.display = "block";
    } else {
        document.querySelector("#empty-library").style.display = "none";
        myLibrary.forEach((item, index) => {
            let book = document.createElement('div');
            book.classList.add("card");
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
    let index = e.target.parentNode.getAttribute("data-index");
    myLibrary.splice(index, 1);
    updateLocalStorage();
    updateLibrary();
}

function updateBookReadInstance(e) {
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