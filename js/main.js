document.addEventListener('DOMContentLoaded', function() {
    const day = new Date().getUTCDate();
    let monthnum = new Date().getMonth();
    let month = "";
    switch(monthnum) {
        case 0:
            month += "Jan";
            break;
        case 1:
            month += "Feb";
            break;
        case 2:
            month += "Mar";
            break;
        case 3:
            month += "Apr";
            break;
        case 4:
            month += "May";
            break;
        case 5:
            month += "Jun";
            break;
        case 6:
            month += "Jul";
            break;
        case 7:
            month += "Aug";
            break;
        case 8:
            month += "Sept";
            break;
        case 9:
            month += "Oct";
            break;
        case 10:
            month += "Nov";
            break;
        case 11:
            month += "Dec";
            break;
        default:
            break;
    }
    const date = document.getElementById('datetime');
    date.innerHTML = day + " " + month;

    const importance = document.getElementById('importance-select');
    let importancehtml = "";
    for(let i = 1; i < 11; i++) {
        importancehtml += "<option value='" + i + "'>" + i + "</option>\n";
    }
    importance.innerHTML = importancehtml;
});

