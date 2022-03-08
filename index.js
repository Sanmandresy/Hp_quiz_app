window.addEventListener("DOMContentLoaded",() => {
    var jouer = document.getElementById("start");
    var suivant = document.getElementById("next");
    var contenu = document.getElementById("question")
    const questionElt =  document.getElementById("quest")
    const choix = document.getElementById("choice")
    let randomQ, actualQ;
    var theme = document.createElement("audio");
    var count = document.getElementById("count");
    var countPoints = document.getElementById("count_points");

    
        



let Play = () => {      
    jouer.classList.add("hide");
    randomQ = questions.sort(() => Math.random() - .5)
    actualQ = 0;
    contenu.classList.remove("hide");
    count.classList.remove("hide");
    count.textContent = 0;
    Next()
}

var clearst = (element) => {
    element.classList.remove("true")
    element.classList.remove("false")

}

var setStatusClass = (element,correct) => {

    clearst(element)
    if(correct){
        element.classList.add("true")
    }
    else{
        element.classList.add("false")
    }

}

let select = (r) => {
    const choisi = r.target
    const correct = choisi.dataset.correct
    setStatusClass(document.body,correct)

    Array.from(choix.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if(randomQ.length > actualQ + 1){
        suivant.classList.remove("hide")
    } else{
        theme.removeAttribute("autoplay");
        jouer.innerText = "Recommencer";
        jouer.classList.remove("hide");
    }
    
}
let resetCont = () => {

    suivant.classList.add("hide")

    while(choix.firstChild){
        choix.removeChild(choix.firstChild)
    }

}
let Next = () => {
    resetCont()
    Nquestion(randomQ[actualQ])
    count.textContent = parseInt(count.textContent) + 1;

}
var Nquestion = (question) => {
    questionElt.innerHTML = question.question
    question.réponses.forEach(réponse => {
        const button = document.createElement("button");
        button.innerText = réponse.text
        button.classList.add("btn");

        if(réponse.correct){
            button.dataset.correct = réponse.correct
        }
        button.addEventListener("click",select);
        choix.appendChild(button)
        
    });
}

var questions = [

    {
        question: "Comment se prenomme le rat de Ron ?",
        réponses:[
            {text:'Pattenrond' , correct: false},
            {text:'Aragog' , correct: false},
            {text:'Hedwig' , correct: false},
            {text:'Croutard' , correct: true},
        ]
    },
    {
        question: "Quel sort permet de repousser les détraqueurs ?",
        réponses:[
            {text:'Expecto Patronum' , correct: true},
            {text:'Flipendo' , correct: false},
            {text:'Riddikilus' , correct: false},
            {text:'Incendio' , correct: false},
        ]
    },
    {
        question: "Comment sont appelés ceux qui parlent la langue des serpents ?",
        réponses:[
            {text:'Bilingue' , correct: false},
            {text:'Fourchelangue' , correct: true},
        ]
    },
    {
        question: "Quel secret cache Lupin ?",
        réponses:[
            {text:'Il est un loup garou' , correct: true},
            {text:"Il s'est échappé d'Azkaban" , correct: false},
        ]
    },
    {
        question: "Qui a détruit Nagini ?",
        réponses:[
            {text:'Luna' , correct: false},
            {text:'Ron' , correct: false},
            {text:'Neville' , correct: true},
            {text:'Harry' , correct: false},
        ]
    },
    {
        question: "Cédric Diggory était un :",
        réponses:[
            {text:'Slytherin' , correct: false},
            {text:'Ravenclaw' , correct: false},
            {text:'Hufflepuff' , correct: true},
            {text:'Gryffindor' , correct: false},
        ]
    },
    {
        question: "Harry a tué le Basilic avec :",
        réponses:[
            {text:'les griffes de Fumseck' , correct: false},
            {text:'sa baguette' , correct: false},
            {text:"l'épée de Godric Gryffondor" , correct: true},
            {text:'le Nimbus 2000', correct: false},
        ]
    },
    {
        question: "Comment s'appelle le fils de Harry ?",
        réponses:[
            {text:'Nicolas Flamel' , correct: false},
            {text:'Cornelius Fudge' , correct: false},
            {text:'Albus Severus' , correct: true},
            {text:'Tom Jedusor' , correct: false},
        ]
    },
    {
        question: "Comment s'appelle le frère de Norbert Dragonneau?",
        réponses:[
            {text:'Thésée' , correct: true},
            {text:'Albeforth' , correct: false},
            {text:'Ariana' , correct: false},
            {text:'Croyance' , correct: false},
        ]
    },
    {
        question: "Sirius Black tente de tuer une personne. Qui?",
        réponses:[
            {text:'Peter Pettigrow' , correct: true},
            {text:'Voldemort' , correct: false},
            {text:'Harry' , correct: false},
            {text:'Severus' , correct: false},
        ]
    },
    {
        question: "Qui à tuer Sirius Black ?",
        réponses:[
            {text:'Voldemort' , correct: false},
            {text:'Bellatrix' , correct: true},
            {text:'Ombrage' , correct: false},
            {text:'Draco' , correct: false},
        ]
    },
    {
        question: " À la base qui est chargé de tuer Albus Dumbledore ?",
        réponses:[
            {text:'Voldemort' , correct: false},
            {text:'Severus' , correct: false},
            {text:'Peeves' , correct: false},
            {text:'Drago' , correct: true},
        ]
    },
    {
        question: "Quels sont les élèves qui participent au tournoi des trois sorciers ?",
        réponses:[
            {text:'Lee Jordan et Cho Chang' , correct: false},
            {text:'Fred et Georges Weasley' , correct: false},
            {text:'Hermione Granger, Ron Weasley, Neville Londubat, Luna Lovegood' , correct: false},
            {text:'Cédric Diggory,Harry Potter,Fleur Delacour,Viktor Krum' , correct: true},
        ]
    },
    {
        question: "Qui est l'auteur de la saga Harry Potter?",
        réponses:[
            {text:'Tolkien' , correct: false},
            {text:'J.K Rowlings' , correct: true},
            {text:'Victor Hugo' , correct: false},
            {text:'Nicolas Flamel' , correct: false},
        ]
    },
    {
        question: "Quel sort utilise Ron pour assomer le troll des montagnes ?",
        réponses:[
            {text:'Incendio' , correct: false},
            {text:"Wingardum Leviosa" , correct: true},
            {text:"Accio" , correct: false},
        ]
    },
    {
        question: "Quelle a été la création la plus célèbre de Nicolas Flamel ?",
        réponses:[
            {text:'La pierre philosophale' , correct: true},
            {text:"La pensine" , correct: false},
            {text:"Les reliques de la mort" , correct: false},
        ]
    },
    {
        question: "Comment s'appelle la sœur cadette de Fleur Delacour ?",
        réponses:[
            {text:"Arielle" , correct: false},
            {text:"Clémence" , correct: false},
            {text:'Lily' , correct: false},
            {text:'Gabrielle' , correct: true},
        ]
    },
    {
        question: "Hagrid a créé Blast-Ended Skrewts en élevant quelles deux créatures magiques ?",
        réponses:[
            {text:"Hippogriffes" , correct: false},
            {text:'Manticores et crabes de feu' , correct: true},
            {text:"Griffons et Chimères" , correct: false},
        ]
    },
    {
        question: "Quel est le patronus de Cho Chang ?",
        réponses:[
            {text:"Lapin" , correct: false},
            {text:"Cerf" , correct: false},
            {text:'Cygne' , correct: true},
            {text:'Serpent' , correct: false},
        ]
    },
    {
        question: "Comment s'appelle le demi-frère d'Hagrid ?",
        réponses:[
            {text:"Ogg" , correct: false},
            {text:'Graup' , correct: true},
            {text:"Golgomath" , correct: false},
            {text:'Bosse' , correct: false},
        ]
    },
    {
        question: "Quel sort permet d'ouvrir les serrures ?",
        réponses:[
            {text:"Expeliarmus" , correct: false},
            {text:"Colloportus" , correct: false},
            {text:'Alohomora' , correct: true},
            {text:'Stupefixio' , correct: false},
        ]
    },
    {
        question: "Qui a remplacé temporairement le portrait de la grosse dame gardant la tour de Gryffondor lorsque celui-ci fut tailladé ?",
        réponses:[
            {text:"Peeves" , correct: false},
            {text:"Portrait de la Joconde" , correct: false},
            {text:'Portrait de Sir Cadogan' , correct: true},
            {text:'Portrait de Severus', correct: false},
        ]
    },
    {
        question: "Dans quel livre Harry remporte-t-il pour la première fois la Coupe de Quidditch avec l'équipe de Gryffondor ?",
        réponses:[
            {text:"La Pierre Philosophale" , correct: false},
            {text:"La Coupe de Feu" , correct: false},
            {text:'La Chambre Des Secrets' , correct: false},
            {text: "Le Prisonnier D'Azkaban" , correct: true},
        ]
    },
    {
        question: "Qui était le premier maître de la baguette de sureau ?",
        réponses:[
            {text:"Grindelwald" , correct: false},
            {text:"Albus Dumbledore" , correct: false},
            {text:'Ignotus Peverell' , correct: true},
            {text: "Draco Malefoy" , correct: false},
        ]
    },
    {
        question: "Que porte le collier que Lavender Brown a offert à Ron pour Noël ?",
        réponses:[
            {text:"Amant" , correct: false},
            {text:"Gagné Gagné" , correct: false},
            {text:'Un Coeur Géant' , correct: false},
            {text: "Mon Chéri" , correct: true},
        ]
    },
    {
        question: "Harry et Hermione assistent à la Coupe du monde de Quidditch avec les Weasley. Qui gagne le match ?",
        réponses:[
            {text:"Le match est interrompu" , correct: false},
            {text:"Angleterre" , correct: false},
            {text: "L'Irlande" , correct: true},
            {text:'Bulgarie' , correct: false},
        ]
    },
    {
        question: "Lorsque Harry rencontre Luna Lovegood pour la première fois dans le Poudlard Express, elle est décrite comme portant une tenue excentrique, y compris quel accessoire ?",
        réponses:[
            {text: "Une paire de Spectrespecs" , correct: false},
            {text:"Boucles d'oreilles en forme de radis" , correct: false},
            {text:'Une couronne de tournesol' , correct: false},
            {text: "Un collier fait de capsules de bièraubeurre" , correct: true},
        ]
    },
    {
        question: "Dolores Umbridge a souvent été décrite portant quel article distinctif ?",
        réponses:[
            {text:"Une paire de boucles d'oreilles en forme de chaton" , correct: false},
            {text: "Un cardigan rose pelucheux" , correct: true},
            {text:"Une broche ornée" , correct: false},
            {text:'Un chapeau de casemate désinvolte' , correct: false},
        ]
    },
    {
        question: "Molly Weasley a perdu deux frères lors de la première guerre des sorciers. Quels étaient leurs noms ?",
        réponses:[
            {text:"Guillaume et Charles" , correct: false},
            {text:"Laurel et Hardy" , correct: false},
            {text:'Cadmus et Ignotus' , correct: false},
            {text: "Fabien et Gédéon" , correct: true},
        ]
    },
    {
        question: "Après leur mariage, Fleur et Bill Weasley se sont installés ensemble. Où vivent-ils?",
        réponses:[
            {text: "Coquille Cottage" , correct: true},
            {text:"Le creux de Godric" , correct: false},
            {text:"12 Place Grimmaud" , correct: false},
            {text:"Dans l'ottery St. Catchpole" , correct: false},
        ]
    },
    

]


    jouer.addEventListener("click",Play)
    suivant.addEventListener("click", () => {
        actualQ++;
        Next()
    })
    jouer.addEventListener("click", () => {   
        if (theme.canPlayType("audio/mpeg")) {
          theme.setAttribute("src","spec/theme.mp3");
        } 
        theme.setAttribute("autoplay", "autoplay");
        theme.setAttribute("loop", "loop");
        document.body.appendChild(theme);
    })
})

