const formEL = document.querySelector('form')

//to create new Library
const lib = new Library()

formEL.addEventListener('submit' , (e) => {
    e.preventDefault()

    const bookTitle = document.getElementById('bookTitle').value.trim()
    const bookAuthor = document.getElementById('bookAuthor').value.trim()

    if (bookTitle && bookAuthor) {
        //To New Book create
        const addedBook = new Book(bookTitle , bookAuthor)
        //Add to library
        lib.addBook(addedBook)
        
        //bellow book info container's function
        renderLibrary()
        
        //clear the input boxes
        document.getElementById('bookTitle').value = ''
        document.getElementById("bookAuthor").value = '';
    }
})

function markBookAsRead(index) {
    lib.getBooks()[index].markAsRead()
    renderLibrary()
}

function removeBook(index) {
    lib.removeBook(index)
    renderLibrary()
}

function renderLibrary() {
    const renderLibEl = document.querySelector("#renderedLibrary");
    const bookCountEl = document.querySelector('#bookCount')
    
    //to implement the bookCount
    bookCountEl.textContent = lib.bookCount()

    //resetting previous values
    renderLibEl.innerHTML = ''

    lib.getBooks().forEach((book , index) => {
        renderLibEl.innerHTML += `
        <li class="p-3 bg-orange-100 rounded flex justify-between">
           <div class="${book.isRead() ? 'line-through' : ''}">
           ${book.getTitle()} <span class="text-sm font-bold text-indigo-700">- by </span> ${book.getAuthor()}</div>
           <div>
               <button class="px-2 py-1 bg-green-600 text-sm rounded text-white" onclick="markBookAsRead(${index})">Mark as Read</button>
               <button class="px-2 py-1 bg-red-600 text-sm rounded text-white" onclick="removeBook(${index})">Remove</button>
           </div>
        </li>`
    })
}

