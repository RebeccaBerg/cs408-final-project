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

let animals = [
    "img/duckling.jpg",
    "img/guinea_pigs.jpg",
    "img/hedgehog.jpg",
    "img/kitten.jpg",
    "img/llama.jpg",
    "img/penguin.jpg",
    "img/puppy.jpg",
    "img/squirrel.jpg"
]

/* Alt texts for the animal images */
let animalalttext = [
    "Two cute ducklings cuddling.",
    "Two fluffy guinea pigs with some leafy greens.",
    "A hedgehog.",
    "A kitten being held aloft wearing a necklace of flowers.",
    "A couple of fluffy llamas in a field.",
    "A bunch of penguins with a couple of fluffy babies.",
    "A puppy on a white blanket.",
    "A squirrel looking at some red flowers."
]

document.addEventListener('DOMContentLoaded', function () {
    let mantraButton = document.getElementById('mantra-button');
    let mantraText = document.getElementById('mantra-text');    

    mantraButton.addEventListener("click", function() {
        mantraText.innerHTML = mantras[Math.floor(Math.random() * mantras.length)];
    });

    let animalButton = document.getElementById('animal-button');
    let animalImg = document.getElementById('animal-pic');

    animalButton.addEventListener("click", function() {
        let value = Math.floor(Math.random() * animals.length);
        animalImg.alt= animalalttext[value];
        animalImg.src= animals[value];        
    });
});

