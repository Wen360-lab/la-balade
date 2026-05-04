// Épisode 1 : Donne-moi ton adresse e-mail

// * Fonction qui vérifie la validitté d'une adresse email
// * @param {String} point -Paramètre du point (.) contenu dans une adresse email
// * @param {String} arobase -Paramètre de l'arobase (@) dans une adresse email
// * return {Boolean} -La fonction retourne un booléen (vrai ou faux)

// const point = '.';
// const arobase = '@';
// export function verifiemail(valide) {
//   if (!valide.includes(" ") && valide.includes(point) && valide.includes(arobase)) {
//     if (valide.indexOf(point) > valide.indexOf(arobase)) {
//       return valide;
//     }
//   }
//   return false;
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------



// Épisode 2 : Choisis un mot de passe

// * Fonction qui vérifie la validitté d'un mot de passe
// * @param {String} contientMajuscule -Paramètre qui vérifie si le mot de passe contient au moins une majuscule 
// * @param {String} contientChiffre -Paramètre qui vérifie si le mot de passe contient au moins un chiffre
// * return {-} -La fonction ne retourne rien

// export function verifieMotDePasse(motDePasse){
//   const contientMajuscule = /[A-Z]/.test(motDePasse); 
//   const contientChiffre = /[0-9]/.test(motDePasse);
  
//   if(!motDePasse.includes(" ") && motDePasse.length >= 8 && contientMajuscule && contientChiffre){ 
//     alert("Votre mot de passe est valide, félicitation !"); 
//   }else {
//     alert("Votre mot de passe est invalide, désolé !"); 
//   }
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------



// Épisode 4 : Dis-moi, quand es-tu né ?

// * Fonction qui vérifie le format de la date de naissance (jj/mm/aaaa)
// * @param {String} date -Paramètre qui stocke la date
// * @param {String} regex -Paramètre qui stocke le format exact de la date
// * return {-} -La fonction ne retourne rien

// export function formatDate(date){

//   const regex = /^\d{2}\/\d{2}\/\d{4}$/;
 
//    if(!date.match(regex)) {
  //      alert("Format de date incorrect !"); 
//    }else {
  //       alert("Format de date correct, bien joué !");
  //    }
  // }
// ---------------------------------------------------------------------------------------------------------------------------------------------



// Épisode 6: Quel jour sommes-nous ?

// * Fonction qui affiche le jour de la semaine en fonction d'un nombre entré au clavier
// * @param {Array} semaine -Paramètre qui stocke les jours de la semaine
// * @param {Number} jour -Paramètre qui stocke le numéro du jour
// * return {-} -La fonction ne retourne rien 


// export function jourDeLaSemaine(jour){

//   const semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

//   switch(jour){ 
//       case 1 : alert(semaine[0]);
//       break;
//       case 2 : alert(semaine[1]);
//       break;
//       case 3 : alert(semaine[2]);
//       break;
//       case 4 : alert(semaine[3]);
//       break;
//       case 5 : alert(semaine[4]);
//       break;
//       case 6 : alert(semaine[5]);
//       break;
//       case 7 : alert(semaine[6]);
//       break;
//       default : alert("Ce numéro ne correspond à aucun jour !");
//     }
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------



// Épisode 7 : Admis ou recalé


// * Fonction qui calcule la moyenne des notes de l'élève
// * @param {Array} tableauNotes -Paramètre qui stocke les notes de l'élève
// * @param {Number} somme -Paramètre qui stocke la somme des notes de l'élève
// * @param {Number} i -Paramètre de l'incrémenttation
// * return {Number} -La fonction  retourne la moyenne des notes de l'élève

// --------------------------------------------------------
export function calculerMoyenne(tableauNotes) {
  let somme = 0;

  for (let i = 0; i < tableauNotes.length; i++) {
    somme += tableauNotes[i];
  }

  return somme / tableauNotes.length;
}
// -----------------------------------------------------------



// Épisode 9 : À table

// * Fonction qui affiche la table de multiplication d'un nombre en console
// * @param {Number} nombre -Paramètre du nombre à multiplier
// * @param {Number} i -Paramètre de l'incrémentattion
// * return {-} -La fonction ne retourne rien 

// export function multiplication(nombre) {
  //   for (let i = 0; i <= 10; i++) {
    //     console.log(nombre + " x " + i + " = " + (nombre * i));
    //   }
    // }
// ---------------------------------------------------------------------------------------------------------------------------------------------



// Épisode 10 : Pair ou Impair

// * Fonction qui affiche la table de multiplication d'un nombre en console
// * @param {Number} nombre -Paramètre du nombre dont on veut connaître la parité
// * return {Boolean} -La fonction  retourne un booléen (vrai ou faux)

// export function pariteNombre(nombre){
  //     return (nombre % 2 === 0);
  // }
// ---------------------------------------------------------------------------------------------------------------------------------------------