console.log("HelloWorld!");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};


function hideDiv() {
    var hide = document.getElementById("btn");
    if (hide.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 


const petCard = [
    {
        imageUrl: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/dinosaur-myths/dino-myths-featherless-velociraptors-two-column.jpg.thumb.768.768.png",
        name: "Steven",
        color: "Brown",
        specialSkill: "none",
        type: "DINO"
    },
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/7/3/0/enhanced-buzz-20636-1372826348-0.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*",
        name: "Bob",
        color: "Green",
        specialSkill: "Catching fish",
        type: "DINO"
    },
    {
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61fqS2CZLgL._AC_SX522_.jpg",
        name: "Jim",
        color: "Black",
        specialSkill: "Eating everything",
        type: "DINO"
    },
    {
        imageUrl: "https://www.pets4homes.co.uk/images/articles/5534/thumbs/ten-things-you-need-to-know-about-the-russian-blue-cat-before-you-buy-one-5d52ab822d033.jpg",
        name: "Coacoa",
        color: "Midnight Blue",
        specialSkill: "begging for treats",
        type: "CAT"
    },
    {
        imageUrl: "https://www.thesprucepets.com/thmb/0tFhy7gu82dgMGL_j5SQvCHXZes=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-cat-lying-on-floor-at-home-908763830-1d61bee6961b45ee8a55bdfa5da1ebb3.jpg",
        name: "Spooky",
        color: "black",
        specialSkill: "pretending to love humans",
        type: "CAT"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1542129297-6456e1a57f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name: "Gary",
        color: "white",
        specialSkill: "being lazy i wonder what happens if i add more text to this section. fixed it! going to leave text here for reference",
        type: "CAT"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1513284999445-edcb3221417c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        name: "Bolto",
        color: "black/white",
        specialSkill: "Sledding",
        type: "DOG"
    },
    {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Chihuahua1_bvdb.jpg",
        name: "Tico",
        color: "Tan",
        specialSkill: "cuddles",
        type: "DOG"
    },
    {
        imageUrl: "https://www.rover.com/blog/wp-content/uploads/2011/11/german-shepherd-960x540.jpg",
        name: "Zeus",
        color: "brown",
        specialSkill: "being goofy",
        type: "DOG"
    }
];


const buildPetCard = () => {
    let domString = '';
    for(let i = 0; i < petCard.length; i++){
        
        domString +=    `<div class="petCard">`;
        domString +=    `<article>`
        domString +=            `<h2 class="${petCard[i].name}">${petCard[i].name}</h2>`;
        domString +=            `<img src="${petCard[i].imageUrl}"></<img>`
        domString +=        `<div class="whiteSpace">`
        domString +=            `<section>Color: ${petCard[i].color}</section>`;
        domString +=            `<hr>`
        domString +=            `<section>Specialty: ${petCard[i].specialSkill}</section>`;
        domString +=        `</div>`
        domString +=    `<footer class="${petCard[i].type}">${petCard[i].type}</footer>`
        domString +=    `</article>`
        domString +=    `</div>`
        
    }
    printToDom('pets', domString);
};

const divFilter = (e) => {
    let domString = '';
    for(let i = 0; i < petCard.length; i++){
        if(petCard[i].type === e.target.id){

        domString +=    `<div class="petCard">`;
        domString +=    `<article>`
        domString +=            `<h2 class="${petCard[i].name}">${petCard[i].name}</h2>`;
        domString +=            `<img src="${petCard[i].imageUrl}"></<img>`
        domString +=        `<div class="whiteSpace">`
        domString +=            `<section>Color: ${petCard[i].color}</section>`;
        domString +=            `<hr>`
        domString +=            `<section>Specialty: ${petCard[i].specialSkill}</section>`;
        domString +=        `</div>`
        domString +=    `<footer class="${petCard[i].type}">${petCard[i].type}</footer>`
        domString +=    `</article>`
        domString +=    `</div>`
        }
        
    }
    printToDom('pets', domString);
}

document.getElementById('allBtn').addEventListener('click', buildPetCard);
document.getElementById('DOG').addEventListener('click', divFilter);
document.getElementById('CAT').addEventListener('click', divFilter);
document.getElementById('DINO').addEventListener('click', divFilter);


buildPetCard();
