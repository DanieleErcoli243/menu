
// dichiaro una funzione che generi la stringa con tutti i dati dell'array
const displayMenuItems = (menuItems) => {
  // uso il metodo map sull'array del menu
  let displayMenu = menuItems.map(item => {
    return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="menu item">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}.</p>
        </div>
      </article>`
  });
  // trasformo il nuovo array in una stringa
  displayMenu = displayMenu.join('');
  // inserisco la stringa nella sezione
  sectionCenter.innerHTML = displayMenu;
};

// dichiaro una funzione per mostrare i bottoni
const displayMenuBtn = () => {
  // riduco l'array degli elementi nel menù per averne le categorie
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']);
  // dichiaro una variabile coi bottoni basati sulle rispettive categorie usando il map
  const categoryBtn = categories.map(category => {
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  }).join('');

  // inietto dinamicamente i bottoni
  btnContainer.innerHTML = categoryBtn;
  // seleziono i bottoni per i filtri
  const btns = document.querySelectorAll('.filter-btn');
  // ciclo sulla lista di bottoni recuperati dal DOM
  btns.forEach(btn => {
    // aggancio un ascoltatore di eventi a ogni bottone per i filtri
    btn.addEventListener('click', e => {
      // dichiaro una variabile che contenga il dataset del singolo bottone che reagisce all'evento
      const category = e.currentTarget.dataset.id;
      // dichiaro un array per filtrare usando le categorie
      const menuCategory = menu.filter(menuItem => {
        // stabilisco la condizione in base alla quale filtrare
        if (menuItem.category === category) {
          return menuItem;
        };
        console.log(menuItem);

      });
      // stabilisco la condizione per mostrare gli elementi al click
      if (category === 'all') {
        displayMenuItems(menu);
        console.log(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });

  });
};

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// seleziono la sezione centrale dal DOM 
const sectionCenter = document.querySelector('.section-center');

// seleziono il contenitore dei bottoni
const btnContainer = document.querySelector('.btn-container');


// aggancio un ascoltatore di eventi alla finestra

window.addEventListener('DOMContentLoaded', () => {
  // invoco la funzione che mostri le voci del menù all'avvio della pagina
  displayMenuItems(menu);
  // invoco la funzione per iniettare i bottoni dinamicamente
  displayMenuBtn();
});
