console.log("HelloWorld!");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};


const petCard = [
    {
        imageUrl: "",
        name: "Steven",
        color: "Brown",
        specialSkill: "none",
        type: "dino"
    },
    {
        imageUrl: "",
        name: "Bob",
        color: "Green",
        specialSkill: "Catching fish",
        type: "dino"
    },
    {
        imageUrl: "",
        name: "Jim",
        color: "Black",
        specialSkill: "Eating fish",
        type: "dino"
    },
    {
        imageUrl: "",
        name: "Coacoa",
        color: "Midnight Blue",
        specialSkill: "begging for treats",
        type: "cat"
    },
    {
        imageUrl: "",
        name: "Spooky",
        color: "black",
        specialSkill: "pretending to love humans",
        type: "cat"
    },
    {
        imageUrl: "",
        name: "Gary",
        color: "white",
        specialSkill: "being lazy",
        type: "cat"
    },
    {
        imageUrl: "",
        name: "Bolto",
        color: "black/white",
        specialSkill: "Sledding",
        type: "dog"
    },
    {
        imageUrl: "",
        name: "Tico",
        color: "Tan",
        specialSkill: "cuddles",
        type: "dog"
    },
    {
        imageUrl: "",
        name: "Zeus",
        color: "brown",
        specialSkill: "being goofy",
        type: "dog"
    }
];

// console.log(petCard);

const buildPetCard = () => {
    let domString = '';
    for(let i = 0; i < petCard.length; i++){
        domString += `<div class="petCard">`;
        domString +=    `<h3>${petCard[i].type}</h3>`
        domString +=    `<p>Name: ${petCard[i].name}</p>`
        domString += `</div>`
    }
    printToDom('pets', domString);
};

buildPetCard();

// const dinoCard_1 = () => {
//     let domString = '';
//     for(let i = 0; i < dinosaurs.length; i++) {
//         console.log()
//     }
// }