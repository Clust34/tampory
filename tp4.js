// CONSIGNE GENERALE: Ecrire l'algorithme et le faire valider avant de coder

// Exo 1: Créer un élément paragraphe avec un nom-prénom de votre choix et l'ajouter à la page
function createParagraphe(texte, couleur) {
    // Je créer le paragraphe
    let paragrapheNom = document.createElement("td");
    // Puis j'ajoute le texte dedans 
    paragrapheNom.innerText = texte;
    paragrapheNom.style.color = couleur
    return paragrapheNom;
}

// Puis j'ajoute mon element à ma page
//document.body.appendChild(createParagraphe("Antoine"))


// Exo 2: Ajouter l'élément précédent dans un div et ajouter encore un élément paragraphe avec le nom d'une entreprise de votre choix

function createElementUtilisateurCard(nomComplet, entreprise, telephone, couleur) {
    // Je créer un élément div
    let divElement = document.createElement("tr");
    // J'ajoute mon element précédent
    divElement.appendChild(createParagraphe(nomComplet, couleur))
    // Je créer mon nouveau paragraphe avec un texte et l'ajoute à ma div
    divElement.appendChild(createParagraphe(entreprise))
    divElement.appendChild(createParagraphe(telephone))
    // J'ajoute ma div à mon body
    document.getElementById("container").appendChild(divElement);
}


// Exo 3: Créer une classe Utilisateur qui aura comme variables: nomComplet, entreprise. Initialiser un instance de cette classe avec les données de votre choix
class Utilisateur {
    #nomComplet
    #entreprise
    #telephone
    #couleur

    constructor (nomComplet, entreprise, telephone, couleur) {
        this.#nomComplet = nomComplet
        this.#entreprise = entreprise
        this.#telephone = telephone
        this.#couleur = couleur
    }

    getNomComplet() {
        return this.#nomComplet
    }

    getEntreprise() {
        return this.#entreprise
    }

    getTelephone() {
        return this.#telephone
    }

    getCouleur() {
        return this.#couleur
    }
}

let antoine = new Utilisateur("Antoine", "Disney")

// Exo 4: Créer une fonction qui prend en paramètre une instance d'Utilisateur et ajoute une div à la page avec dedans 2 paragraphes (nomComplet, entreprise)

// Créer un fonction en param Utilisateur
function createUserCard (utilisateur) {
    // J'utilise ma fonction pour créer une div de l'utilisateur
    createElementUtilisateurCard(
        utilisateur.getNomComplet(),
        utilisateur.getEntreprise(),
        utilisateur.getTelephone(),
        utilisateur.getCouleur()
    )
}

//createUserCard(antoine)


// Exo 5: Créer une fonction qui transforme un objet en class Utilisateur
let utilisateur = {
    entreprise: {
        departement: "Assurance",
        nom: "Amiltone",
        titre: "Consultant Développement Web"
    },
    nomComplet: "Antoine Bonin"
}

// Une fonction, en param un objet et retourne une instance d'Utilisateur
function objetVersUtilisateur (utilisateur) {
    // Récupère les informations de l'utilisateur
    let nomComplet = utilisateur.nomComplet;
    let entreprise = utilisateur.entreprise.nom;
    let telephone = utilisateur.telephone;
    let couleur = utilisateur.couleur;
    // J'instancie mon utilisateur
    return new Utilisateur(nomComplet, entreprise, telephone, couleur)
}
/*
let newUser = objetVersUtilisateur(utilisateur)
console.log(newUser);
*/



// Exo 6: En utilisant le fichier assurances.json afficher les informations (carte) des 5 premiers utilisateurs sur notre page

const assurances = [
    {
        "nomComplet": "Ansberte Charpentier",
        "entreprise": {
            "nom": "Carter's",
            "departement": "Garden",
            "titre": "Investor Configuration Planner"
        },
        "telephone": "4230886806",
        "couleur": "#587441"
    },
    {
        "nomComplet": "Néhémie Michel",
        "entreprise": {
            "nom": "American Equity Investment Life Holding",
            "departement": "Shoes",
            "titre": "Dynamic Communications Orchestrator"
        },
        "telephone": "7265739999",
        "couleur": "#2e6918"
    },
    {
        "nomComplet": "Jocelyne Francois",
        "entreprise": {
            "nom": "ArcBest",
            "departement": "Toys",
            "titre": "Direct Accountability Specialist"
        },
        "telephone": "2999269838",
        "couleur": "#2d3379"
    },
    {
        "nomComplet": "Zoé Brunet",
        "entreprise": {
            "nom": "ARRIS Group",
            "departement": "Outdoors",
            "titre": "Regional Integration Supervisor"
        },
        "telephone": "6186482157",
        "couleur": "#0a1c5b"
    },
    {
        "nomComplet": "Sylvain Prevost",
        "entreprise": {
            "nom": "Biogen",
            "departement": "Movies",
            "titre": "District Tactics Executive"
        },
        "telephone": "2582332181",
        "couleur": "#6a7b7f"
    },
    {
        "nomComplet": "Dieudonnée Bertrand",
        "entreprise": {
            "nom": "PNC Financial Services Group",
            "departement": "Jewelery",
            "titre": "Lead Accountability Architect"
        },
        "telephone": "3312217600",
        "couleur": "#600e39"
    },
    {
        "nomComplet": "Odon Marchal",
        "entreprise": {
            "nom": "CareFusion",
            "departement": "Electronics",
            "titre": "Central Implementation Liaison"
        },
        "telephone": "2566616890",
        "couleur": "#040100"
    },
    {
        "nomComplet": "Robert Charles",
        "entreprise": {
            "nom": "PetSmart",
            "departement": "Electronics",
            "titre": "Forward Data Designer"
        },
        "telephone": "9295108305",
        "couleur": "#3f622b"
    },
    {
        "nomComplet": "Aurélie Adam",
        "entreprise": {
            "nom": "Oaktree Capital Group",
            "departement": "Movies",
            "titre": "District Tactics Agent"
        },
        "telephone": "2149942231",
        "couleur": "#7b0f11"
    },
    {
        "nomComplet": "Bérangère Perrin",
        "entreprise": {
            "nom": "Waste Connections",
            "departement": "Movies",
            "titre": "Principal Factors Officer"
        },
        "telephone": "6876450916",
        "couleur": "#294d08"
    },
    {
        "nomComplet": "Mamert Jean",
        "entreprise": {
            "nom": "J.B. Hunt Transport Services",
            "departement": "Shoes",
            "titre": "Principal Data Producer"
        },
        "telephone": "4339920023",
        "couleur": "#40093e"
    },
    {
        "nomComplet": "Joanny Carre",
        "entreprise": {
            "nom": "Mueller Industries",
            "departement": "Games",
            "titre": "Dynamic Marketing Architect"
        },
        "telephone": "1212369182",
        "couleur": "#257527"
    },
    {
        "nomComplet": "Armance Thomas",
        "entreprise": {
            "nom": "Cabot",
            "departement": "Toys",
            "titre": "Future Markets Agent"
        },
        "telephone": "8737631355",
        "couleur": "#685a72"
    },
    {
        "nomComplet": "Mence Giraud",
        "entreprise": {
            "nom": "Ashland",
            "departement": "Beauty",
            "titre": "National Quality Coordinator"
        },
        "telephone": "0020410415",
        "couleur": "#7f7243"
    },
    {
        "nomComplet": "Céleste Lacroix",
        "entreprise": {
            "nom": "Apache",
            "departement": "Computers",
            "titre": "Dynamic Marketing Coordinator"
        },
        "telephone": "0334647992",
        "couleur": "#2b7168"
    },
    {
        "nomComplet": "Alix Carpentier",
        "entreprise": {
            "nom": "Alcoa",
            "departement": "Baby",
            "titre": "Dynamic Assurance Facilitator"
        },
        "telephone": "2267070972",
        "couleur": "#0c5363"
    },
    {
        "nomComplet": "Alverède Gauthier",
        "entreprise": {
            "nom": "Calpine",
            "departement": "Movies",
            "titre": "Chief Communications Manager"
        },
        "telephone": "7192275026",
        "couleur": "#0b7618"
    },
    {
        "nomComplet": "Laurent Thomas",
        "entreprise": {
            "nom": "iHeartMedia",
            "departement": "Home",
            "titre": "Customer Optimization Executive"
        },
        "telephone": "8482066570",
        "couleur": "#306133"
    },
    {
        "nomComplet": "Mence Simon",
        "entreprise": {
            "nom": "Ralph Lauren",
            "departement": "Toys",
            "titre": "Chief Security Facilitator"
        },
        "telephone": "6621658888",
        "couleur": "#6c3838"
    },
    {
        "nomComplet": "Herbert Marie",
        "entreprise": {
            "nom": "Celgene",
            "departement": "Jewelery",
            "titre": "Forward Tactics Officer"
        },
        "telephone": "6138478180",
        "couleur": "#741a5c"
    },
    {
        "nomComplet": "Caroline Blanc",
        "entreprise": {
            "nom": "Sabre",
            "departement": "Garden",
            "titre": "Chief Assurance Consultant"
        },
        "telephone": "4075353117",
        "couleur": "#20625a"
    },
    {
        "nomComplet": "Avoye Roche",
        "entreprise": {
            "nom": "Vantiv",
            "departement": "Electronics",
            "titre": "Forward Division Orchestrator"
        },
        "telephone": "0606072937",
        "couleur": "#7e0420"
    },
    {
        "nomComplet": "Maxime Legrand",
        "entreprise": {
            "nom": "Unified Grocers",
            "departement": "Garden",
            "titre": "Central Program Manager"
        },
        "telephone": "4549897402",
        "couleur": "#4a2164"
    },
    {
        "nomComplet": "Martine Garcia",
        "entreprise": {
            "nom": "Forest Laboratories",
            "departement": "Clothing",
            "titre": "Senior Factors Administrator"
        },
        "telephone": "1915974149",
        "couleur": "#3f162c"
    },
    {
        "nomComplet": "Aurèle Muller",
        "entreprise": {
            "nom": "Robert Half International",
            "departement": "Home",
            "titre": "Product Optimization Producer"
        },
        "telephone": "2738087272",
        "couleur": "#011b60"
    },
    {
        "nomComplet": "Adegrine Berger",
        "entreprise": {
            "nom": "NBTY",
            "departement": "Computers",
            "titre": "Forward Paradigm Strategist"
        },
        "telephone": "1854487394",
        "couleur": "#7b1500"
    },
    {
        "nomComplet": "Albérade Lefebvre",
        "entreprise": {
            "nom": "Lennar",
            "departement": "Jewelery",
            "titre": "Dynamic Brand Developer"
        },
        "telephone": "2721275610",
        "couleur": "#241214"
    },
    {
        "nomComplet": "Martine Thomas",
        "entreprise": {
            "nom": "AAR",
            "departement": "Baby",
            "titre": "Chief Configuration Architect"
        },
        "telephone": "3673102254",
        "couleur": "#1a4380"
    },
    {
        "nomComplet": "Benoît Giraud",
        "entreprise": {
            "nom": "Smart & Final Stores",
            "departement": "Home",
            "titre": "Global Identity Coordinator"
        },
        "telephone": "8759014169",
        "couleur": "#2e7012"
    },
    {
        "nomComplet": "Vigile Joly",
        "entreprise": {
            "nom": "L-3 Communications",
            "departement": "Home",
            "titre": "Corporate Division Analyst"
        },
        "telephone": "6800641259",
        "couleur": "#3f337d"
    },
    {
        "nomComplet": "Agnane Maillard",
        "entreprise": {
            "nom": "Autoliv",
            "departement": "Industrial",
            "titre": "Chief Paradigm Architect"
        },
        "telephone": "0029426946",
        "couleur": "#3c295e"
    },
    {
        "nomComplet": "Dominique Clement",
        "entreprise": {
            "nom": "BWX Technologies",
            "departement": "Home",
            "titre": "International Markets Specialist"
        },
        "telephone": "6501606504",
        "couleur": "#2d6006"
    },
    {
        "nomComplet": "Aymonde Olivier",
        "entreprise": {
            "nom": "First American Financial",
            "departement": "Shoes",
            "titre": "Central Marketing Developer"
        },
        "telephone": "0625162501",
        "couleur": "#3f4f41"
    },
    {
        "nomComplet": "Philomène Poirier",
        "entreprise": {
            "nom": "Fluor",
            "departement": "Books",
            "titre": "Product Markets Analyst"
        },
        "telephone": "8539804757",
        "couleur": "#224510"
    },
    {
        "nomComplet": "Francisque Berger",
        "entreprise": {
            "nom": "Sabre",
            "departement": "Kids",
            "titre": "National Response Specialist"
        },
        "telephone": "7834368819",
        "couleur": "#427630"
    },
    {
        "nomComplet": "Suzon Gaillard",
        "entreprise": {
            "nom": "HD Supply Holdings",
            "departement": "Electronics",
            "titre": "Dynamic Mobility Architect"
        },
        "telephone": "4790125691",
        "couleur": "#740f71"
    },
    {
        "nomComplet": "Roch Petit",
        "entreprise": {
            "nom": "Cintas",
            "departement": "Baby",
            "titre": "Human Marketing Associate"
        },
        "telephone": "4677261928",
        "couleur": "#4d3c55"
    },
    {
        "nomComplet": "Clara Denis",
        "entreprise": {
            "nom": "Welltower",
            "departement": "Jewelery",
            "titre": "International Operations Designer"
        },
        "telephone": "7686348937",
        "couleur": "#3f0609"
    },
    {
        "nomComplet": "Florie Laurent",
        "entreprise": {
            "nom": "Staples",
            "departement": "Beauty",
            "titre": "Regional Marketing Designer"
        },
        "telephone": "2860855550",
        "couleur": "#161263"
    },
    {
        "nomComplet": "Christiane Roger",
        "entreprise": {
            "nom": "Symantec",
            "departement": "Books",
            "titre": "Direct Division Administrator"
        },
        "telephone": "8322872122",
        "couleur": "#6e3e33"
    },
    {
        "nomComplet": "Marianne Joly",
        "entreprise": {
            "nom": "Synopsys",
            "departement": "Books",
            "titre": "Global Directives Liaison"
        },
        "telephone": "8496750438",
        "couleur": "#2c7533"
    },
    {
        "nomComplet": "Ferdinand Roger",
        "entreprise": {
            "nom": "Viacom",
            "departement": "Health",
            "titre": "Lead Operations Manager"
        },
        "telephone": "4955343014",
        "couleur": "#5a376f"
    },
    {
        "nomComplet": "Bruno Fabre",
        "entreprise": {
            "nom": "United Natural Foods",
            "departement": "Books",
            "titre": "Lead Functionality Supervisor"
        },
        "telephone": "2559746053",
        "couleur": "#795f4c"
    },
    {
        "nomComplet": "Gonthier Morel",
        "entreprise": {
            "nom": "TEGNA",
            "departement": "Music",
            "titre": "Future Solutions Architect"
        },
        "telephone": "2138664437",
        "couleur": "#121e7c"
    },
    {
        "nomComplet": "Roger Hubert",
        "entreprise": {
            "nom": "United Natural Foods",
            "departement": "Automotive",
            "titre": "Direct Web Producer"
        },
        "telephone": "2229831171",
        "couleur": "#55166d"
    },
    {
        "nomComplet": "Venceslas Renaud",
        "entreprise": {
            "nom": "Insight Enterprises",
            "departement": "Movies",
            "titre": "Internal Infrastructure Officer"
        },
        "telephone": "8380262252",
        "couleur": "#3c4420"
    },
    {
        "nomComplet": "Audouin Meunier",
        "entreprise": {
            "nom": "CF Industries Holdings",
            "departement": "Toys",
            "titre": "Human Metrics Architect"
        },
        "telephone": "4841238021",
        "couleur": "#762210"
    },
    {
        "nomComplet": "Évangéline Blanc",
        "entreprise": {
            "nom": "Principal Financial",
            "departement": "Books",
            "titre": "Internal Response Coordinator"
        },
        "telephone": "3676766994",
        "couleur": "#0a4214"
    },
    {
        "nomComplet": "Chrétien Lemaire",
        "entreprise": {
            "nom": "QEP Resources",
            "departement": "Games",
            "titre": "Product Tactics Consultant"
        },
        "telephone": "1523142036",
        "couleur": "#6a030c"
    },
    {
        "nomComplet": "Brunehaut Roy",
        "entreprise": {
            "nom": "Dow Chemical",
            "departement": "Music",
            "titre": "Chief Research Specialist"
        },
        "telephone": "2563887345",
        "couleur": "#1d0257"
    },
    {
        "nomComplet": "Liétald Colin",
        "entreprise": {
            "nom": "Graphic Packaging Holding",
            "departement": "Sports",
            "titre": "Internal Response Executive"
        },
        "telephone": "3492993533",
        "couleur": "#4e3f39"
    },
    {
        "nomComplet": "Adrehilde Boyer",
        "entreprise": {
            "nom": "Ally Financial",
            "departement": "Outdoors",
            "titre": "Lead Web Supervisor"
        },
        "telephone": "8974583353",
        "couleur": "#4a5e20"
    },
    {
        "nomComplet": "Conception Laine",
        "entreprise": {
            "nom": "Tailored Brands",
            "departement": "Games",
            "titre": "District Accounts Technician"
        },
        "telephone": "7401326850",
        "couleur": "#015c7e"
    },
    {
        "nomComplet": "Rebecca Lucas",
        "entreprise": {
            "nom": "ITT",
            "departement": "Tools",
            "titre": "Principal Brand Designer"
        },
        "telephone": "6498623969",
        "couleur": "#0c7660"
    },
    {
        "nomComplet": "Edgard Riviere",
        "entreprise": {
            "nom": "American Express",
            "departement": "Electronics",
            "titre": "Legacy Markets Analyst"
        },
        "telephone": "8071886956",
        "couleur": "#5f7431"
    },
    {
        "nomComplet": "Acacie Masson",
        "entreprise": {
            "nom": "Trimble Navigation",
            "departement": "Shoes",
            "titre": "Future Operations Planner"
        },
        "telephone": "3680666002",
        "couleur": "#347009"
    },
    {
        "nomComplet": "Chloé Dumas",
        "entreprise": {
            "nom": "Citigroup",
            "departement": "Baby",
            "titre": "Future Operations Agent"
        },
        "telephone": "4684610051",
        "couleur": "#037e07"
    },
    {
        "nomComplet": "Delphin Carpentier",
        "entreprise": {
            "nom": "Coca-Cola",
            "departement": "Movies",
            "titre": "Human Metrics Supervisor"
        },
        "telephone": "9551225146",
        "couleur": "#110209"
    }
]

// Boucle sur 5 premiers utilisateurs
for (let index = 0; index < assurances.length; index++) {
    // ON récupère les données de l'utilisateur à un index donné
    const utilisateur = assurances[index];
    // On transforme les données brutes en instance de la classe Utilisateur
    const instanceUtilisateur = objetVersUtilisateur(utilisateur)
    // On utilise l'instance pour créer notre carte
    createUserCard(instanceUtilisateur)
}

// Exo 7: Ajouter le numéro de téléphone de l'utilisateur sur chaque carte
// Exo 8: Afficher le nom de l'utilisateur sur sa carte avec sa couleur



/*
let el = elemetnHtml.firstChild // <- nous donne le premier element enfant du parent
elemetnHtml.removeChild(el) // <- supprime un element enfant du parent
*/
// on vide le tableau html
function videTableau () {
    // on selectionne nitre container
    let container = document.getElementById('container');
    // tant qu'on as un enfant
    while (container.firstChild ) {
        // on le supprime
        container.removeChild(container.firstChild)
    }
}


// trier par ordre alphabetique par le nom
function trieCroissant () {
    assurances.sort(function(user1, user2) {
        return user1.nomComplet.localeCompare(user2.nomComplet, 'fr')
       // if (user1.nomComplet < user2.nomComplet){
        //    return -1
       // } 
       // if (user1.nomComplet > user2.nomComplet){
       //     return 1
       // } 
       // return 0;
})
}

   
// trier par ordre alphabetique par le nom
function triDecroissant () {
    assurances.sort(function(user1, user2) {
        return user2.nomComplet.localeCompare(user1.nomComplet, 'fr')
      //  if (user1.nomComplet < user2.nomComplet){
       //     return 1
       // } 
       // if (user1.nomComplet > user2.nomComplet){
      //      return -1
      //  } 
      //  return 0;
    })
}
 
// trier par ordre alphabetique par lentreprise
function trieCroissantEntreprise () {
    assurances.sort(function(user1, user2) {
        return user1.entreprise.nom.localeCompare(user2.entreprise.nom, 'fr')
       // if (user1.entreprise < user2.entreprise){
       //     return -1
      //  } 
       // if (user1.entreprise > user2.entreprise){
       //     return 1
      //  } 
       // return 0;
})
}

// trier par ordre alphabetique par le nom
function triDecroissantEntreprise () {
    assurances.sort(function(user1, user2) {
        return user2.entreprise.nom.localeCompare(user1.entreprise.nom, 'fr')
     //   if (user1.entreprise < user2.entreprise){
      //      return 1
      //  } 
      //  if (user1.entreprise > user2.entreprise){
      //      return -1
      //  } 
      //  return 0;
    })
}

function rempliTableau () {
    for (let index = 0; index < assurances.length; index++) {
        // ON récupère les données de l'utilisateur à un index donné
        const utilisateur = assurances[index];
        // On transforme les données brutes en instance de la classe Utilisateur
        const instanceUtilisateur = objetVersUtilisateur(utilisateur)
        // On utilise l'instance pour créer notre carte
        createUserCard(instanceUtilisateur)
    }
}

// selectionner notre element bouton
// on ajoute un eventlistener qui clique sur le bouton
// on fait notre trie
document.getElementById('btn1').addEventListener('click', () => {
    trieCroissant()
    videTableau()
    rempliTableau()
})
document.getElementById('btn2').addEventListener('click', () => {
    
    triDecroissant()
    videTableau()
    rempliTableau()
})
document.getElementById('btn3').addEventListener('click', () => {
    trieCroissantEntreprise()
    videTableau()
    rempliTableau()
})
document.getElementById('btn4').addEventListener('click', () => {
    triDecroissantEntreprise()
    videTableau()
    rempliTableau()
})

let toogleNom = true;
document.getElementById('btn5').addEventListener('click', () => {
    videTableau()
    let donnee = assurances.sort(function(user1, user2) {
        return user1.nomComplet.localeCompare(user2.nomComplet, 'fr')})

    if (toogleNom === true) {
        donnee = donnee.reverse();
        toogleNom = false
    } else {
        toogleNom = true
    }
    rempliTableau()
})
document.getElementById('btn6').addEventListener('click', () => {
    videTableau()
    let donnee = assurances.sort(function(user1, user2) {
        return user1.entreprise.nom.localeCompare(user2.entreprise.nom, 'fr')})

    if (toogleNom === true) {
        donnee = donnee.reverse();
        toogleNom = false
    } else {
        toogleNom = true
    }
    rempliTableau()
})

// on envoie le numero de téléphone en lien