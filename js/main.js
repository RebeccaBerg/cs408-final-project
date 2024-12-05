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
        }
    })

    const formsubmitbutton = this.getElementById('submitnewtodobutton');
    formsubmitbutton.addEventListener("click", submit(newToDoForm));

    load();

});

function load() {
    let table = document.getElementById("table-body");
    table.innerHTML = "";
    fetch("https://w0s6j6k7n4.execute-api.us-east-2.amazonaws.com/items")
    .then(response => response.json())
    .then(data => data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.importance}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.description}</td>
            <td><button class="delete-btn" data-id="${item.name}">Delete</button></td>
        `;
        table.appendChild(tr);
    }));
}

function submit(newToDoForm) {
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
    if (newToDoForm.style.display === "block") {
        newToDoForm.style.display = "none";
    }
    });
}




