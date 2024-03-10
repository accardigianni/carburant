
async function apiCall() {
    return fetch('https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/prix-des-carburants-en-france-flux-instantane-v2/exports/json')
        .then(target => target.json());
}

async function printResult() {

    let essType1 = document.getElementById('SP98').checked;
    let essType2 = document.getElementById('SP95').checked;
    let temp = true
    let resultsDiv = document.getElementById('results');
    let noResultDiv = document.getElementById('noResult')

    noResultDiv.innerHTML = '';
    resultsDiv.innerHTML = '';
    try {
        const data = await apiCall();
        data.forEach(value => {
            //console.log(value);
            if (essType1 && value.sp98_prix !== null) {
                let message = `Le prix du SP98 pour ${value.ville} est ${value.sp98_prix}`;
                let paragraph = document.createElement('p');
                paragraph.textContent = message;
                resultsDiv.appendChild(paragraph);
                temp = false
            } else if (essType2 && value.sp95_prix !== null) {
                let message = `Le prix du SP95 pour ${value.ville} est ${value.sp95_prix}`;
                let paragraph = document.createElement('p');
                paragraph.textContent = message;
                resultsDiv.appendChild(paragraph);
                temp = false;
            }
        });
        if (temp && !essType1 && !essType2) {
            temp = false;
            console.log(temp + 'boucle if');
            let message = "Sélectionner un carburant";
            let paragraph = document.createElement('p');
            paragraph.textContent = message;
            noResultDiv.appendChild(paragraph);

        };

    } catch (error) {
        console.error(`Une erreur s'est produite :`, error);
    };


    console.log(temp + 'sortie');
}
document.getElementById('submitButton').addEventListener("click", function () {
    printResult();
});




// function fetchData() {
//     let tableauDeTest = []
//     const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cff559fdf9mshc7c13bd55273f15p1b3804jsn849d75adb730',
//             'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
//         }
//     };

//     fetch(url, options)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('network error');
//             }
//             return response.json();
//         })
//         .then(data => {
//             tableauDeTest.push(data);
//             console.log(tableauDeTest);
//         })
//         .catch(error => {
//             console.log('probleme de recupération des données');
//         })


// }

// fetchData();





// async function fetchBitcoin() {
//     const url = 'https://community-coinbase.p.rapidapi.com/prices/spot_rate?api_key=%3CREQUIRED%3E';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cff559fdf9mshc7c13bd55273f15p1b3804jsn849d75adb730',
//             'X-RapidAPI-Host': 'community-coinbase.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

//fetchBitcoin()
