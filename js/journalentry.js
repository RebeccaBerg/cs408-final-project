document.addEventListener('DOMContentLoaded', function () {
    load();
});

function load() {
    /* Loads the entry using local storage for id and fetching journal id from database */
    let entryId = localStorage.getItem('journalId');
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let entry = document.getElementById('entry');
    fetch(`https://dw6jqtiaq9.execute-api.us-east-2.amazonaws.com/items/${entryId}`)
    .then(response => response.json())
    .then(data => {        
            title.innerHTML = `${data.title}`;
            date.innerHTML = `${data.date}`;
            entry.innerHTML = `${data.entry}`;
    });

}