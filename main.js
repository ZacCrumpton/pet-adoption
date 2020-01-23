console.log("HelloWorld!");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};


const dinosaurs = [
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
    }
];
console.log(dinosaurs);

const cat = [
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
    }
];

console.log(cat);

const dog = [
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

console.log(dog)

// const dinoCard_1 = () => {
//     let domString = '';
//     for(let i = 0; i < dinosaurs.length; i++) {
//         console.log()
//     }
// }