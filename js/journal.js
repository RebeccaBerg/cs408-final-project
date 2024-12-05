document.addEventListener('DOMContentLoaded', function () {
    load();

    const formsubmitbutton = this.getElementById('submitnewJournal');
    formsubmitbutton.addEventListener("click", submit);

});

/* Hide and show form */
function showForm() {
    let form = document.getElementById("formContainer");

    if (form.style.display == "block") {
        form.style.display = "none";
    }
    else {
        form.style.display = "block";
    }
}

/* Loads all journal entries */
function load() {
    let table = document.getElementById("table-body");
    table.innerHTML = "";
    fetch("https://dw6jqtiaq9.execute-api.us-east-2.amazonaws.com/items")
    .then(response => response.json())
    .then(data => {
            data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.date}</td>
                <td>${item.title}</td>
                <td><button class="delete-button" data-id="${item.id}">Delete</button></td>
                <td><button class="open-entry" data-id="${item.id}">Go To Entry</button></td>
            `;
            table.appendChild(tr);
        });
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => deleteEntry(button.dataset.id));
        });
        const openEntryButtons = document.querySelectorAll('.open-entry');
        openEntryButtons.forEach(button => {
            button.addEventListener('click', () => clickEntry(button.dataset.id));
        })
    });

}

/* Submit a new entry */
function submit() {
    //Get form object from html
    let form = document.querySelector('form');
       
    //Add event for submit action (button press)
    form.addEventListener('submit', (event) => {
        //Prevent the default form action
        event.preventDefault();      
    
        // Create variable for each input
        let id = Math.random() * 100000;
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let entry = document.getElementById('entry').value;
   
        const newJournalEntry = {
           id: id.toString(),
           title: title,
           date: date,
           entry: entry
       };
   
       fetch('https://dw6jqtiaq9.execute-api.us-east-2.amazonaws.com/items', {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(newJournalEntry)
       })
       .then(response => {
           load();
       })
   
        //Reset the form values
       form.reset();
       showForm();
       });
}

/* Delete an entry */
function deleteEntry(id) {
    fetch(`https://dw6jqtiaq9.execute-api.us-east-2.amazonaws.com/items/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            load();
        }
    });
}

/* Click on entry to navigate to the entry page */
function clickEntry(id) {
    localStorage.setItem('journalId',id)
    document.location.href='journalentry.html';
}