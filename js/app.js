// Épisode 1 : Donne-moi ton adresse e-mail


// import { multiplication, pariteNombre } from "./fonctions"

// const email = prompt("Entrez votre adresse email s'il vous plaît : "); //On demande à l'utilisateur d'entrer son adresse email et on la stocke dans email

//   if (!email.includes(" ") && email.includes('.') && email.includes('@')) { //On vérifie que l'adresse comporte : un point et un arobade et ne comporte pas : d'espaces
//     if (email.indexOf('.') > email.indexOf('@')){ //On vérifie que le point se trouve après l'arobase dans l'adresse
//       alert("Votre adresse email est valide félicitation !"); //Si l'adresse est correcte on félicite l'utilisateur
//     }
//   }else{
  //     alert("Votre adresse email n'est pas valide, désolé !"); //Sinon, on lui dit que son email est invalide
  //   }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------


// Épisode 2 : Choisie un mot de passe 

// const motDePasse = prompt("Entrez votre mot de passe s'il vous plaît : "); //On demande à l'utilisateur d'entrer un mot de passe 
// const contientMajuscule = /[A-Z]/.test(motDePasse); //On parcours le mot de passe pour vérifier qu'il contient au moins une lettre majuscule
// const contientChiffre = /[0-9]/.test(motDePasse); //On fait la même chose pour les chifres

//   if(!motDePasse.includes(" ") && motDePasse.length >= 8 && contientMajuscule && contientChiffre){ //On pose une condition, si le mot de passe ne contient pas d'espace, a une taille supérieure ou égale à 8, contient au moins une lettre majuscule et un chiffre
//     alert("Votre mot de passe est valide, félicitation !"); //Alors on affiche un message de félicitation à l'utilisateur lui disant que sont mot de passe est valide
//   }else {
  //     alert("Votre mot de passe est invalide, désolé !"); //Sinon on lui affiche un message d'erreur 
  //   }
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  // Épisode 3 : Au pluriel

  // const nomUtilisateur = prompt("Quel est votre nom ?"); //On demande le nom de l'utilisateur
  // const nbrEnfantUtilisateur = prompt(parsInt("Combien d'enfant avez-vous ?"));//Ainsi que le nombre d'enfant qu'il a
  
  //   if (nbrEnfantUtilisateur > 0){ //Si le nombre d'enfant est supérieur à 0 
//     alert(nomUtilisateur + " , " + " vous avez " + nbrEnfantUtilisateur + " enfants.");//Alors on affiche le nom de l'utilisateur et le nombre d'enfant qu'il a
//   }else {
  //     alert(nomUtilisateur + " , " + " vous n'avez pas d'enfant."); //Sinon on affiche son nom et on souligne le fait qu'il n'a pas d'enfant
  //   }
 // ----------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
 // Épisode 4: Dis-moi, quand es-tu né ?
 
 //  const date = prompt("Entrez votre date de naissance : ");//On demande à l'utilisateur d'entrer une date de naissance
 //  const regex = /^\d{2}\/\d{2}\/\d{4}$/;//La variable regex va strocker le bon format de la date
 
 //   if(!date.match(regex)) { //Si le format est différent de la date entrée par l'tilisateur
 //     alert("Format de date incorrect !"); //On affiche un message d'erreur
 //   }else {
  //     alert("Format de date correct, bien joué !");//Sinon on lui félicite pour avoir entrer une date au format valide
  //   }
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  // Épisode 5: Fiche de renseignement 
  
//On crée l'objet utilisateur avec les propriétés nom, prenom et sexe qui auront les valeurs saisies par l'utilisateur
// const utilisateur = {
  //   nom : prompt("Entrez votre nom : "),
  //   prenom : prompt("Entrez votre prénom : "),
  //   sexe : prompt("Entrez votre sexe : ")
  // }
  
  // //En fonction du sexe de l'utilisateir on crée une nouvelle propriété (titre)
  //   if(utilisateur.sexe === "M"){ //Si le sexe de l'utilisateur est Masculin
  //     utilisateur.titre = "M"; //Alors aura la valeur M 
  //   }else{
    //     utilisateur.titre = "Mme";//Sinon il aura la valeur Mme
    //   }
    
    //   console.log(utilisateur);//On affiche l'objet utilisateur dans la console
// ----------------------------------------------------------------------------------------------------------------------------------------------------------


// Épisode 6: Quel jour sommes-nous ?

// const semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];//On stocke les jour de la semaine dans un tableau

// const jour = parseInt(prompt("Entrez le numéro d'un jour : ")); //On demande à l'utilisateur d'entrer un numéro de jour

//   switch(jour){ //En fonction du numéro du jour entrer par l'utilisateur, on affiche le jour correspondant qui se situ dans le tableau
//       case 1 : alert(semaine[0]);//Lundi
//       break;
//       case 2 : alert(semaine[1]);//Mardi
//       break;
//       case 3 : alert(semaine[2]);//Mercredi
//       break;
//       case 4 : alert(semaine[3]);//Jeudi
//       break;
//       case 5 : alert(semaine[4]);//Vendredi
//       break;
//       case 6 : alert(semaine[5]);//Samedi
//       break;
//       case 7 : alert(semaine[6]);//Dimanche
//       break;
//       default : alert("Ce numéro ne correspond à aucun jour !");//Si l'utilisateur entre un numéro inférieur à 1 ou supérieur à 7 on lui affiche un message d'erreur
//     }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------


// Épisode 7: Admis ou recalé

// const nbrNote = parseInt(prompt("Entrez le nombre de notes à saisir : ")); //On demande à l'utilisateur d'entrer le nombre de notes qu'il veut entrer
// const tableauNote = []; //Tableau des notes
// let somme = 0; //la somme des notes

//   if (nbrNote <= 0){ //On vérifie que le nombre de note que l'utilisateur va entrer n'est pas négatif
//     alert("Entrée invalide, veuillez entrer un nombre supérieur à 0");//Sinon a l'affiche cette erreur
//   }else { //Sinon
//     for(let i = 0; i < nbrNote; i++){ //on parcours le tableau en y insérant les notes 
//       do { //On demande à l'utilisateur d'entrer un note 
//         tableauNote[i] = parseFloat(prompt("Entrez la note  " + (i+1) + " (compris entre 0 et 20)"));
//       }while(tableauNote[i] < 0 || tableauNote[i] > 20); //On redemande si le note est inférieure à 0 ou supérieure à 20
//     }
//   }

//   for(let i = 0; i < nbrNote; i++){ //On calcule la somme de toutes les notes et on la stocke dans somme
//     somme += tableauNote[i];
//   }

//   let moyenne = somme / nbrNote;//Puis on calcule la moyenne 

//   alert("La moyenne de vos notes en mathématiques est de " + moyenne);//Enfin on affiche la moyenne
// ----------------------------------------------------------------------------------------------------------------------------------------------------------


// Épisode 8: Proclamation

// const nbreEleve = parseInt(prompt("Entrez le nombre d'élève de la classe : ")); //On demande à l'utilisateur d'entrer un nombre bien précis d'élèves
// const tableauEleve =  [];//On crée un tableau pour stocker l'ensemble des élèves

// if(nbreEleve <= 0){ //On vérifie que le nombre d'élève n'est pas négatif
//   alert("Entrée invalide, veuillez entrer un nombre supérieur à 0"); //Si c'est le cas on envoie un message d'erreur
// }else {  //Sinon 
//   for(let i = 0; i < nbreEleve; i++){ //On parcours une boucle afin de saisir le nom et la moyenne de chaque élève

//     let nom = prompt("Nom de l'élève " + (i+1));//on récupère le nom de l'élève 
//     let moyenne;

//       do { 
  //         moyenne = parseFloat(prompt("Moyenne de " + nom + " (0 à 20)"));//On demande la moyenne de l'élève 
  //       }while(moyenne < 0 || moyenne > 20);//Jusque quand cette moyenne est valide
  //       tableauEleve.push({nom: nom, moyenne: moyenne});// Ensuite on stocke le nom et la moyenne de chacun des élèves dans le tableau
  //     }
  
  //     let meilleurEleve = tableauEleve[0];//On crée une variable meilleurEleve et on lui attribut l'élève 1 par défaut
  
  //     for(let i = 1; i < tableauEleve.length; i++){//On parcours le tableau d'élève 
  //       if (tableauEleve[i].moyenne > meilleurEleve.moyenne){//Puis on compare la moyenne de l'évève par défaut à celle des autres élèves 
  //         meilleurEleve = tableauEleve[i];//Une fois trouvé, on change et celui qui a la plus grande moyenne devient le meilleur élève
  //       }
  //     }
  
  //     alert("Le premier de la classe est " + meilleurEleve.nom + " avec une moyenne de " + meilleurEleve.moyenne);//Enfin on affiche le nom et la moyenne du premier élève
  //   }
  
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
// Épisode 9: À table

// const nbre = parseInt(prompt("Entrez le nombre dont vous voulez savoir la table de mutiplication : "));//On demande à l'utilisateur d'entrer un nombre

//   if (isNaN(nbre)) { //On vérifie que ce nombre est correct avec la condition if
//     alert("Veuillez entrer un nombre valide");//S'il s'avère que l'entée est invalide, on affiche un message d'erreur
//   } else {//sinon
//     multiplication(nbre);//On appelle la fonction multiplication
//   }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------


// Épisode 10: Pair ou impair

// import { pariteNombre } from "./fonctions.js";

// const nombre = parseInt(prompt("Entrer un nombre : "));

//   if (isNaN(nombre)) { //On vérifie que ce nombre est correct avec la condition if
//     alert("Veuillez entrer un nombre valide");//S'il s'avère que l'entée est invalide, on affiche un message d'erreur
//   } else {//sinon
//     if(pariteNombre(nombre)){
  //       alert( nombre + " est un nombre pair.");
  //     }else {
    //       alert( nombre + " est un nombre impair.");  
    //     }  
    //   }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
    

// Épisode 11 : Le boss
// 1 : Donne-moi ton adresse e-mail

// import { verifiemail } from "./fonctions.js";

// const email = prompt('Entrez votre adresse email : '); //On récupère l'email de l'utilisateur

// if (verifiemail(email)) {   //On vérifie qu'elle est valide
//   alert("Adresse email valide"); //on affiche un message si l'email est valide
// }else {
  //   alert("Adresse email invalide"); //on affiche un message d'erreur si l'email est valide
  // }
  
  
// 2 : Choisis un mot de passe

// import { verifieMotDePasse } from "./fonctions.js";

// const motDePasse = prompt("Entrez un mot de passe : ");//On demande à l'utilisateur d'entrer un mot de passe de son choix
//   verifieMotDePasse(motDePasse);//Puis on vérifie sa validité grâce à la fonction verifieMotDePasse 



// Épisode 4: Dis-moi, quand es-tu né ?

// import { formatDate } from "./fonctions.js";

// const date = prompt("Entrez votre date de naissance : "); //On demande à l'utilisateur d'entrer sa date de naissance
//   formatDate(date);//Et on vérifie le format de la date



// Épisode 6: Quel jour sommes-nous ?

// import { jourDeLaSemaine } from "./fonctions.js";

// const jour = parseInt(prompt("Entrez un nombre (compris entre 1 et 5) : "));//On demande à l'utilisateur d'entrer un nombre correspndant à un jour de la semaine
//   jourDeLaSemaine(jour);//Et on affiche le jour correspondant en fonction du jour grâce à la fonction jourDeLaSemaine qui gère égelement les erreurs de saisie





// Épisode 6: Quel jour sommes-nous ?

import { calculerMoyenne } from "./fonctions.js";

const nbrNote = parseInt(prompt("Entrez le nombre de notes à saisir : "));//Ondemande à l'utilisateur le nombre de notes qu'il aimerait entrer
const tableauNote = [];//Tabbleau des notes

  if (nbrNote <= 0 || isNaN(nbrNote)) {//On vérifie les entrées de l'utilisateur : s'il n'entre rien ou que le nombre de note est inférieur à 0 
    alert("Entrée invalide");//On lui affiche un message d'erreur
  } else {//Sinon
    for (let i = 0; i < nbrNote; i++) {//On parcours  une boucle 
      let note;

      do {
        note = parseFloat(prompt("Entrez la note " + (i + 1) + " (entre 0 et 20)"));//Pour stocker les notes de l'utilisateur
      } while (note < 0 || note > 20 || isNaN(note));//Tant que les notes entrée sont bien compreise entre 0 et 20

      tableauNote.push(note);//Puis on ajoute une nouvelle note à la fin du tableau en fonction du nombre de notes défini plus haut par l'utilisateur
    }

    const moyenne = calculerMoyenne(tableauNote);//On appelle la fonction calculerMoyenne qui comme son nom l'indique va calculer la moyenne des notes saisies

    alert("La moyenne est : " + moyenne + " /20");//Enfin, on affiche la moyenne de l'élève
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
