let books = [];

function renderBooks() {
    const bookList = document.getElementById('movieList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editBook(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteBook(index));

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        bookList.appendChild(li);
    });
}

function addMovie() {
    const title = document.getElementById('name').value;
    const author = document.getElementById('Director').value;

    if (title && author) {
        books.push({ title, author });
        renderBooks();
        document.getElementById('name').value = '';
        document.getElementById('Director').value = '';
    } else {
        alert('Please enter both Movie and Director.');
    }
}

function editBook(index) {
    const title = prompt('Enter new Movie:');
    const author = prompt('Enter new Director:');

    if (title && author) {
        books[index] = { title, author };
        renderBooks();
    } else {
        alert('Please enter both Movie and Director.');
    }
}

function deleteBook(index) {
    const confirmDelete = confirm('Are you sure you want to delete this Movie?');

    if (confirmDelete) {
        books.splice(index, 1);
        renderBooks();
    }
}

// Initial rendering
renderBooks();
