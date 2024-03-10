
function apiCall() {
    return fetch('https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/prix-des-carburants-en-france-flux-instantane-v2/exports/json')
        .then(target => target.json());
}

function printResult() {
    let essType = document.getElementById('essSelection').checked;
    let resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = '';
    if (essType) {
        console.log("coucou");
        apiCall()
            .then(array => {
                array.forEach(value => {
                    if (value.sp98_prix != null) {
                        let message = `Le prix du SP98 pour ${value.ville} est ${value.sp98_prix}`;
                        let paragraph = document.createElement('p');
                        paragraph.textContent = message;
                        resultsDiv.appendChild(paragraph);
                    }
                });
            })
            .catch(error => {
                console.error(`Une erreur s'est produite :`, error);
            });
    }
}
document.getElementById('submitButton').addEventListener("click", function () {
    printResult();
});



