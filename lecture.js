function analyserPhrase() {
    // Récupérer la phrase entrée par l'utilisateur
    let phrase = document.getElementById('inputPhrase').value.trim();

    // Vérifier si la phrase se termine par un point
    if (phrase.charAt(phrase.length - 1) !== '.') {
        document.getElementById('result').textContent = "La phrase doit se terminer par un point.";
        return;
    }

    // Variables pour les comptages
    let longueur = 0; // Compteur de la longueur de la phrase
    let nombreDeMots = 0; // Compteur du nombre de mots
    let nombreDeVoyelles = 0; // Compteur du nombre de voyelles
    let nombreDeConsonnes = 0; // Compteur du nombre de consonnes
    let totalLettres = 0; // Compteur des lettres (voyelles + consonnes)

    // Liste des voyelles
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    const consonnes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D','F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

    // Analyser la phrase caractère par caractère
    let motEnCours = false; // Variable pour détecter un mot en cours
    for (let i = 0; i < phrase.length; i++) {
        let char = phrase.charAt(i);

        // Compter les caractères de la phrase
        longueur++;

        // Compter les voyelles
        if (voyelles.includes(char)) {
            nombreDeVoyelles++;
        }

        if (consonnes.includes(char)) {
            nombreDeConsonnes++;
        }

        // Compter les mots (un mot commence après un espace ou au début de la phrase)
        if (char !== ' ' && (i === 0 || phrase.charAt(i - 1) === ' ')) {
            nombreDeMots++;
        }
    }

    // Calcul des pourcentages
    let pourcentageVoyelles = totalLettres > 0 ? (nombreDeVoyelles / totalLettres) * 100 : 0;
    let pourcentageConsonnes = totalLettres > 0 ? (nombreDeConsonnes / totalLettres) * 100 : 0;

    // Afficher les résultats
    document.getElementById('result').innerHTML = 
        `Longueur de la phrase : ${longueur} caractères<br>` +
        `Nombre de mots : ${nombreDeMots} mots<br>` +
        `Nombre de voyelles : ${nombreDeVoyelles} (${pourcentageVoyelles.toFixed(2)}%)<br>` +
        `Nombre de consonnes : ${nombreDeConsonnes} (${pourcentageConsonnes.toFixed(2)}%)`
} 
