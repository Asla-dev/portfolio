// Fonction 1: Calcul de taxe (17%)
function calculateTax() {
    const priceInput = document.getElementById('price');
    const price = parseFloat(priceInput.value);
    const taxResult = document.getElementById('taxResult');
    
    if (isNaN(price)){
        taxResult.textContent = "Veuillez entrer un prix valide.";
        taxResult.style.color = "red";
        return;
    }
    
    const tax = price * 0.17;
    
    taxResult.innerHTML = `
        Prix initial: ${price.toFixed(2)} DH<br>
        Taxe (17%): ${tax.toFixed(2)} DH<br>
    `;
    taxResult.style.color = "green";
}

// Fonction 2: Afficher la date du jour
function showCurrentDate() {
    const currentDateElement = document.getElementById('currentDate');
    const now = new Date();
    
    // Options pour le formatage de la date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    currentDateElement.textContent = now.toLocaleDateString('fr-FR', options);
}

// Fonction 3: Vérifier l'existence d'un nombre dans un tableau
function checkNumberInArray() {
    // Tableau de nombres entiers
    const numbersArray = [5, 12, 8, 130, 44, 3, 27, 99, 50, 71];
    const numberToCheckInput = document.getElementById('numberToCheck');
    const numberToCheck = parseInt(numberToCheckInput.value);
    const arrayCheckResult = document.getElementById('arrayCheckResult');
    
    if (isNaN(numberToCheck)) {
        arrayCheckResult.textContent = "Veuillez entrer un nombre entier valide.";
        arrayCheckResult.style.color = "red";
        return;
    }
    
    const isPresent = numbersArray.includes(numberToCheck);
    
    arrayCheckResult.innerHTML = `
        Tableau: [${numbersArray.join(', ')}]<br>
        Le nombre ${numberToCheck} est ${isPresent ? 'présent' : 'absent'} dans le tableau.
        <br>Résultat booléen: <strong>${isPresent}</strong>
    `;
    arrayCheckResult.style.color = isPresent ? "green" : "orange";
}

// Gestionnaire pour le champ range
document.getElementById('range').addEventListener('input', function() {
    document.getElementById('rangeValue').textContent = this.value;
});