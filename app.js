
function apiCall() {
    return fetch('https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/prix-des-carburants-en-france-flux-instantane-v2/exports/json')
        .then(response => response.json());
}

function printResult() {
    apiCall()
        .then(array => {
            let resultsDiv = document.getElementById('results');
            array.forEach(value => {
                let message = `Le prix du SP98 pour ${value.ville} est ${value.sp98_prix}`;
                let paragraph = document.createElement('p');
                paragraph.textContent = message;
                resultsDiv.appendChild(paragraph);
            });
        })
        .catch(error => {
            console.error(`Une erreur s'est produite :`, error);
        });
}

printResult();



