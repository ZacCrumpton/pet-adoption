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



// const dinoCard_1 = () => {
//     let domString = '';
//     for(let i = 0; i < dinosaurs.length; i++) {
//         console.log()
//     }
// }