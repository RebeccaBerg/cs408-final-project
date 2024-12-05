document.addEventListener('DOMContentLoaded', function() {
    const day = new Date().getUTCDate();
    let monthnum = new Date().getMonth();
    let month = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const date = document.getElementById('datetime');
    date.innerHTML = day + " " + month[monthnum];

    const importance = document.getElementById('importance-select');
    let importancehtml = "";
    for(let i = 1; i < 11; i++) {
        importancehtml += "<option value='" + i + "'>" + i + "</option>\n";
    }
    importance.innerHTML = importancehtml;

    const newToDoForm = document.getElementById('newtodoform');
    newToDoForm.style.display = "none";
    const addNewToDoButton = document.getElementById('addtodobutton');
    addNewToDoButton.addEventListener('click', function () {
        if (newToDoForm.style.display === "none") {
            newToDoForm.style.display = "block";
            addNewToDoButton.innerHTML = "Hide Form";
        }
        else {
            newToDoForm.style.display = "none";
            addNewToDoButton.innerHTML = "Add new TODO";
        }
    })

    const formsubmitbutton = this.getElementById('submitnewtodobutton');
    formsubmitbutton.addEventListener("click", submit);

    load();

    const journalAside = document.getElementById('journals');
    journalAside.innerHTML = "";
    fetch("https://dw6jqtiaq9.execute-api.us-east-2.amazonaws.com/items")
    .then(response => response.json())
    .then(data => {
            for(let i = 0; i < 6; i++) {
                const tr = document.createElement('tr');
                if (i > data.length - 1) {
                    tr.innerHTML = "";
                }
                else{
                    tr.innerHTML = `<td><button class="journal-entry" data-id="${data[i].id}">${data[i].title}</button></td>`;
                }
                journalAside.appendChild(tr);
            }
            const openEntryButtons = document.querySelectorAll('.journal-entry');
            openEntryButtons.forEach(button => {
            button.addEventListener('click', () => clickEntry(button.dataset.id));
        })
        });

    let category = document.getElementById('categoryselect');
    category.addEventListener('input', categorySelect);

    let searchbox = document.getElementById('searchbox');
    searchbox.addEventListener('input', textsearch);
});

function load() {
    let table = document.getElementById("table-body");
    table.innerHTML = "";
    fetch("https://w0s6j6k7n4.execute-api.us-east-2.amazonaws.com/items")
    .then(response => response.json())
    .then(data => {
            data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.importance}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.description}</td>
                <td><button class="delete-button" data-id="${item.name}">Delete</button></td>
            `;
            table.appendChild(tr);
        });
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
        button.addEventListener('click', () => tableItemDelete(button.dataset.id));
        });
    });

}

function categorySelect() {
    let categorySelect = document.getElementById('categoryselect');
    search(categorySelect.value);
}

function textsearch() {
    let searchbox = document.getElementById('searchbox');
    search(searchbox.value);
}

function search(text) {
    if (text === 'All' || text === '') {
        load();
    }
    else {
    let table = document.getElementById("table-body");
    table.innerHTML = "";
    fetch("https://w0s6j6k7n4.execute-api.us-east-2.amazonaws.com/items")
    .then(response => response.json())
    .then(data => {
            data.forEach(item => {
                let importance = item.importance.toString();
                let name = item.name.toString();
                let category = item.category.toString();
                let description = item.description.toString();
                if (importance.toLowerCase() === text.toLowerCase() || name.toLowerCase() === text.toLowerCase() || category.toLowerCase() === text.toLowerCase() || description.toLowerCase() === text.toLowerCase()) {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td>${item.importance}</td>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.description}</td>
                    <td><button class="delete-button" data-id="${item.name}">Delete</button></td>
                `;
                table.appendChild(tr);
            }
        });
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
        button.addEventListener('click', () => tableItemDelete(button.dataset.id));
        });
    });
}
}

function tableItemDelete(name) {
    fetch(`https://w0s6j6k7n4.execute-api.us-east-2.amazonaws.com/items/${name}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            load();
        }
    });
}

function submit() {
 //Get form object from html
 let form = document.querySelector('form');
    
 //Add event for submit action (button press)
 form.addEventListener('submit', (event) => {
     //Prevent the default form action
     event.preventDefault();      
 
     // Create variable for each input
     let importance = document.getElementById('importance-select').value;
     let category = document.getElementById('category').value;
     let name = document.getElementById('name').value;
     let description = document.getElementById('description').value;

     const newToDo = {
        name: name,
        importance: importance,
        category: category,
        description: description
    };

    fetch('https://w0s6j6k7n4.execute-api.us-east-2.amazonaws.com/items', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newToDo)
    })
    .then(response => {
        load();
    })

     //Reset the form values
    form.reset();
    });
}


function clickEntry(id) {
    localStorage.setItem('journalId',id)
    document.location.href='journalentry.html';
}

