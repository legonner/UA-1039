function loadAuthors() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'books.json', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var authors = JSON.parse(xhr.responseText);
            displayAuthors(authors);
        } else {
            console.error('Error loading authors:', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network error while loading authors');
    };
    xhr.send();
}

function displayAuthors(authors) {
    var authorsList = document.getElementById('authorsList');
    authorsList.innerHTML = '';

    authors.forEach(function (author) {
        var authorItem = document.createElement('li');
        authorItem.textContent = author;
        authorsList.appendChild(authorItem);
    });
}

document.getElementById('downloadBtn').addEventListener('click', function () {
    loadAuthors();
});
