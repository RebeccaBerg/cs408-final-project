let mantras = [
    "'Don't let yesterday take up too much of today.' - Will Rogers",
    "'Believe you can and you're half way there.' - Theodore Roosevelt",
    "'When we strive to become better than we are, everything around us becomes better too.' - Paulo Coelho",
    "'Inspiration does exist, but it must find you working.' - Pablo Picasso",
    "'Don't look at your feet to see if you are doing it right.  Just dance.' - Anne Lamott",
    "'Life is like riding a bicycle.  To keep your balance, you must keep moving.' - Albert Einstein",
    "'Be sure you put your feet in the right place, then stand firm.' - Abraham Lincoln",
    "'The reason we struggle with insecurity is because we compare our behind the scenes with everyone else's highlight reel' - Steve Furtick",
    "'The best way out is always through.' - Robert Frost",
    "'Courage is like a muscle.  We strengthen it by use.' - Ruth Gordo"
];

document.addEventListener('DOMContentLoaded', function () {
    let mantraButton = document.getElementById('mantra-button');
    let mantraText = document.getElementById('mantra-text');    

    mantraButton.addEventListener("click", function() {
        mantraText.innerHTML = mantras[Math.floor(Math.random() * mantras.length)];
    });
});

